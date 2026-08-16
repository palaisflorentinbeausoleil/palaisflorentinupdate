--[[----------------------------------------------------------------------------
AutoMontage — Montage vidéo automatique pour DaVinci Resolve
================================================================================
Ce script fait un premier montage complet à votre place, à partir d'un simple
dossier de rushes :

  • import des vidéos (et des photos, en option) dans un chutier dédié,
  • création d'une timeline,
  • découpe automatique de chaque plan (les débuts/fins tremblants sont évités)
    et alternance des clips selon le rythme choisi, jusqu'à la durée cible,
  • musique posée sous l'image (mise en boucle si elle est trop courte),
    son des rushes coupé en option,
  • titre d'ouverture (Text+) en option,
  • export H.264 lancé automatiquement en option.

Installation : copier ce fichier dans le dossier « Fusion/Scripts/Utility » de
DaVinci Resolve (voir README.md ou les installeurs fournis), puis relancer
Resolve.

Utilisation : menu « Espace de travail » (Workspace) ▸ Scripts ▸ AutoMontage.

Compatible DaVinci Resolve 18 ou plus récent, version gratuite incluse.
------------------------------------------------------------------------------]]

-- =============================== Contexte API ===============================

local function getResolve()
  if resolve ~= nil then return resolve end
  local ok, r = pcall(function() return Resolve() end)
  if ok and r ~= nil then return r end
  if bmd ~= nil and bmd.scriptapp ~= nil then return bmd.scriptapp("Resolve") end
  return nil
end

local R = getResolve()
if R == nil then
  print("[AutoMontage] Impossible de contacter DaVinci Resolve.")
  return
end

if bmd == nil then
  print("[AutoMontage] Environnement de script incomplet (module bmd absent).")
  return
end

local fusionApp = fu or fusion
if fusionApp == nil then
  local ok, f = pcall(function() return R:Fusion() end)
  if ok then fusionApp = f end
end
if fusionApp == nil then
  print("[AutoMontage] Impossible d'accéder à Fusion (interface graphique indisponible).")
  return
end

local projectManager = R:GetProjectManager()
local project = projectManager and projectManager:GetCurrentProject() or nil
if project == nil then
  print("[AutoMontage] Aucun projet ouvert. Ouvrez ou créez un projet puis relancez le script.")
  return
end

-- ================================ Constantes ================================

local SEP = package.config:sub(1, 1)

local VIDEO_EXT = { mp4 = true, mov = true, m4v = true, avi = true, mts = true,
                    m2ts = true, mxf = true, mkv = true, webm = true,
                    braw = true, r3d = true, ["3gp"] = true }
local PHOTO_EXT = { jpg = true, jpeg = true, png = true, tif = true, tiff = true,
                    bmp = true, heic = true, dng = true, webp = true }
local AUDIO_EXT = { mp3 = true, wav = true, m4a = true, aac = true, aif = true,
                    aiff = true, flac = true, ogg = true }

local STYLES = {
  { name = "Dynamique — plans courts (1,5 à 3 s)",   min = 1.5, max = 3.0 },
  { name = "Équilibré — plans moyens (3 à 5 s)",     min = 3.0, max = 5.0 },
  { name = "Contemplatif — plans longs (5 à 8 s)",   min = 5.0, max = 8.0 },
}

-- Alternance de longueurs pour un rythme naturel, non mécanique.
local SEG_PATTERN = { 0.50, 1.00, 0.20, 0.80, 0.35, 0.90, 0.10, 0.65 }

-- ================================ Utilitaires ===============================

local function trimStr(s)
  return (tostring(s or ""):gsub("^%s+", ""):gsub("%s+$", ""))
end

local function stripTrailingSep(p)
  return (tostring(p or ""):gsub("[/\\]+$", ""))
end

local function fileExt(name)
  return string.lower(string.match(tostring(name or ""), "%.([^%./\\]+)$") or "")
end

local function listDir(dir)
  local entries = nil
  pcall(function() entries = bmd.readdir(dir .. SEP .. "*") end)
  return entries
end

-- Nombre d'images d'un clip : propriété « Frames » si disponible, sinon
-- décodage du timecode « Duration » (HH:MM:SS:FF) avec la cadence fournie.
local function clipFrames(item, fps)
  local fr = nil
  pcall(function() fr = tonumber(item:GetClipProperty("Frames")) end)
  if fr ~= nil and fr > 0 then return fr end
  local dur = ""
  pcall(function() dur = tostring(item:GetClipProperty("Duration") or "") end)
  local h, m, s, f = string.match(dur, "^(%d+):(%d+):(%d+)[:;](%d+)$")
  if h ~= nil then
    return math.floor((tonumber(h) * 3600 + tonumber(m) * 60 + tonumber(s)) * fps + tonumber(f) + 0.5)
  end
  return 0
end

local function clipFps(item, fallback)
  local v = nil
  pcall(function() v = tonumber(item:GetClipProperty("FPS")) end)
  if v ~= nil and v > 0 then return v end
  return fallback
end

local function shuffle(t)
  math.randomseed(os.time())
  for i = #t, 2, -1 do
    local j = math.random(i)
    t[i], t[j] = t[j], t[i]
  end
end

local function fmtSec(sec)
  local m = math.floor(sec / 60)
  local s = math.floor(sec % 60 + 0.5)
  if m > 0 then return string.format("%d min %02d s", m, s) end
  return string.format("%d s", s)
end

-- ============================ Moteur de montage =============================

-- Ajoute un clip à la timeline ; pour les photos, retente sans bornes si
-- Resolve refuse la plage demandée (durée par défaut des images fixes).
local function appendOne(mediaPool, info, allowFallback)
  local res = nil
  pcall(function() res = mediaPool:AppendToTimeline({ info }) end)
  local ok = (res ~= nil) and (type(res) ~= "table" or #res > 0)
  if ok then return true end
  if allowFallback and (info.startFrame ~= nil or info.endFrame ~= nil) then
    local plain = { mediaPoolItem = info.mediaPoolItem }
    if info.mediaType ~= nil then plain.mediaType = info.mediaType end
    res = nil
    pcall(function() res = mediaPool:AppendToTimeline({ plain }) end)
    return (res ~= nil) and (type(res) ~= "table" or #res > 0)
  end
  return false
end

-- Construit la liste des segments (round-robin entre les clips, longueurs
-- variées selon le style) jusqu'à atteindre la durée cible.
local function buildPlaylist(sources, opts)
  local playlist, total, segIdx = {}, 0.0, 0
  local remaining, usable = 0, 0
  for _, s in ipairs(sources) do
    if not s.done then remaining = remaining + 1 end
    if s.single then
      usable = usable + (s.len or 0)
    else
      usable = usable + math.max(s.uEnd - s.cursor, 0)
    end
  end
  -- Rushes abondants : on saute un morceau entre deux prises du même clip
  -- pour varier. Rushes rares : on exploite presque tout, sans gaspiller.
  local scarce = usable < opts.target * 2
  local idx, guard = 0, 0
  while total < opts.target - 0.25 and remaining > 0 and guard < 10000 do
    guard = guard + 1
    idx = (idx % #sources) + 1
    local s = sources[idx]
    if not s.done then
      local leftTarget = opts.target - total
      if s.single then
        local take = math.min(s.len, leftTarget)
        if take < 0.5 then
          if leftTarget < 0.5 then break end
          s.done = true
          remaining = remaining - 1
        else
          table.insert(playlist, { src = s, startSec = s.startSec or 0, lenSec = take })
          total = total + take
          segIdx = segIdx + 1
          s.done = true
          remaining = remaining - 1
        end
      else
        local avail = s.uEnd - s.cursor
        if avail < 0.5 then
          s.done = true
          remaining = remaining - 1
        else
          local p = SEG_PATTERN[(segIdx % #SEG_PATTERN) + 1]
          local want = opts.minSeg + (opts.maxSeg - opts.minSeg) * p
          local take = math.min(want, avail, leftTarget)
          if take < 0.5 then
            if leftTarget < 0.5 then break end
            s.done = true
            remaining = remaining - 1
          else
            table.insert(playlist, { src = s, startSec = s.cursor, lenSec = take })
            local skip = scarce and math.min(0.5, take * 0.2) or math.max(1.0, take)
            s.cursor = s.cursor + take + skip
            total = total + take
            segIdx = segIdx + 1
          end
        end
      end
    end
  end
  return playlist, total
end

local function runEngine(opts)
  local lines = {}
  local warn = {}
  local function say(msg) print("[AutoMontage] " .. msg) end

  -- 1) Inventaire du dossier -------------------------------------------------
  local entries = listDir(opts.srcDir)
  if entries == nil then
    error("Dossier introuvable ou illisible : " .. opts.srcDir)
  end
  local videoPaths, photoPaths = {}, {}
  for _, e in ipairs(entries) do
    if not e.IsDir then
      local ext = fileExt(e.Name)
      if VIDEO_EXT[ext] then
        table.insert(videoPaths, opts.srcDir .. SEP .. e.Name)
      elseif opts.usePhotos and PHOTO_EXT[ext] then
        table.insert(photoPaths, opts.srcDir .. SEP .. e.Name)
      end
    end
  end
  if #videoPaths == 0 and #photoPaths == 0 then
    error("Aucune vidéo trouvée dans « " .. opts.srcDir .. " ».\n" ..
          "Formats reconnus : MP4, MOV, M4V, AVI, MTS, M2TS, MXF, MKV, WEBM, BRAW…")
  end
  say(#videoPaths .. " vidéo(s) et " .. #photoPaths .. " photo(s) détectée(s).")

  -- 2) Import dans un chutier dédié -------------------------------------------
  local mediaPool = project:GetMediaPool()
  local rootFolder = mediaPool:GetRootFolder()
  local binName = "AutoMontage " .. os.date("%d-%m-%Y %Hh%M")
  local bin = mediaPool:AddSubFolder(rootFolder, binName)
  if bin ~= nil then mediaPool:SetCurrentFolder(bin) end

  local allPaths = {}
  for _, p in ipairs(videoPaths) do table.insert(allPaths, p) end
  for _, p in ipairs(photoPaths) do table.insert(allPaths, p) end

  local imported = nil
  pcall(function() imported = mediaPool:ImportMedia(allPaths) end)
  if imported == nil or #imported == 0 then
    error("Resolve n'a importé aucun média depuis ce dossier.\n" ..
          "Vérifiez que les fichiers sont lisibles (formats pris en charge par Resolve).")
  end
  say(#imported .. " média(s) importé(s) dans le chutier « " .. binName .. " ».")

  -- 3) Timeline ----------------------------------------------------------------
  local tlName = opts.timelineName
  local timeline = mediaPool:CreateEmptyTimeline(tlName)
  local suffix = 2
  while timeline == nil and suffix <= 9 do
    tlName = opts.timelineName .. " (" .. suffix .. ")"
    timeline = mediaPool:CreateEmptyTimeline(tlName)
    suffix = suffix + 1
  end
  if timeline == nil then
    error("Impossible de créer la timeline « " .. opts.timelineName .. " ».")
  end
  pcall(function() project:SetCurrentTimeline(timeline) end)

  local tlFps = 25
  pcall(function()
    local s = tostring(timeline:GetSetting("timelineFrameRate") or "")
    local v = tonumber(string.match(s, "[%d%.]+"))
    if v ~= nil and v > 0 then tlFps = v end
  end)
  say("Timeline « " .. tlName .. " » créée (" .. tlFps .. " i/s).")

  -- 4) Préparation des sources -------------------------------------------------
  local sources = {}
  for _, item in ipairs(imported) do
    local path = ""
    pcall(function() path = tostring(item:GetClipProperty("File Path") or "") end)
    local name = path
    pcall(function() name = tostring(item:GetName() or path) end)
    local ext = fileExt(path ~= "" and path or name)
    if VIDEO_EXT[ext] then
      local fps = clipFps(item, tlFps)
      local frames = clipFrames(item, fps)
      local durSec = frames > 0 and (frames / fps) or 0
      if durSec <= 0 then
        table.insert(warn, "Clip ignoré (durée illisible) : " .. name)
      elseif durSec < opts.minSeg then
        -- Clip très court : utilisé entier, une seule fois.
        table.insert(sources, { item = item, name = name, kind = "video",
                                fps = fps, frames = frames,
                                single = true, len = durSec, startSec = 0 })
      else
        -- On évite ~10 % au début et à la fin (tremblements, mise en place).
        local margin = math.min(1.5, durSec * 0.1)
        local uStart, uEnd = margin, durSec - margin
        if uEnd - uStart < opts.minSeg then uStart, uEnd = 0, durSec end
        table.insert(sources, { item = item, name = name, kind = "video",
                                fps = fps, frames = frames,
                                cursor = uStart, uEnd = uEnd })
      end
    elseif PHOTO_EXT[ext] then
      table.insert(sources, { item = item, name = name, kind = "photo",
                              fps = tlFps, single = true,
                              len = opts.photoSec, startSec = 0 })
    end
  end
  if #sources == 0 then
    error("Aucun clip exploitable après import.")
  end

  if opts.order == 1 then
    shuffle(sources)
  else
    table.sort(sources, function(a, b) return tostring(a.name) < tostring(b.name) end)
  end

  -- 5) Découpe et assemblage ----------------------------------------------------
  local playlist, plannedSec = buildPlaylist(sources, opts)
  if #playlist == 0 then
    error("Impossible de construire le montage (rushes trop courts ?).")
  end

  local appended, appendedSec, photosUsed = 0, 0.0, 0
  for _, seg in ipairs(playlist) do
    local info = { mediaPoolItem = seg.src.item }
    local isPhoto = (seg.src.kind == "photo")
    local fps = seg.src.fps or tlFps
    local startFrame = math.floor(seg.startSec * fps + 0.5)
    local nFrames = math.max(math.floor(seg.lenSec * fps + 0.5), 1)
    if seg.src.frames ~= nil and seg.src.frames > 0 then
      if startFrame > seg.src.frames - 1 then startFrame = 0 end
      if startFrame + nFrames > seg.src.frames then nFrames = seg.src.frames - startFrame end
    end
    info.startFrame = startFrame
    info.endFrame = startFrame + nFrames - 1
    if opts.muteRushes and not isPhoto then info.mediaType = 1 end
    if appendOne(mediaPool, info, isPhoto) then
      appended = appended + 1
      appendedSec = appendedSec + seg.lenSec
      if isPhoto then photosUsed = photosUsed + 1 end
    else
      table.insert(warn, "Plan non ajouté : " .. tostring(seg.src.name))
    end
  end
  if appended == 0 then
    error("Aucun plan n'a pu être ajouté à la timeline.")
  end
  say(appended .. " plan(s) ajouté(s) (" .. fmtSec(appendedSec) .. ").")

  -- Durée et point de départ réels de la timeline.
  local tlStart, tlEnd = nil, nil
  pcall(function() tlStart = timeline:GetStartFrame() end)
  pcall(function() tlEnd = timeline:GetEndFrame() end)
  local vidFrames
  if tlStart ~= nil and tlEnd ~= nil and tlEnd > tlStart then
    vidFrames = tlEnd - tlStart
  else
    vidFrames = math.floor(appendedSec * tlFps + 0.5)
  end

  -- 6) Musique -------------------------------------------------------------------
  local musicOk = false
  if opts.musicPath ~= "" then
    local musicItem = nil
    local importedMusic = nil
    pcall(function() importedMusic = mediaPool:ImportMedia({ opts.musicPath }) end)
    if importedMusic ~= nil and #importedMusic > 0 then
      musicItem = importedMusic[1]
    else
      -- Déjà importée (par ex. fichier audio placé dans le dossier des rushes).
      local base = string.lower(string.match(opts.musicPath, "([^/\\]+)$") or "")
      local clips = nil
      pcall(function() clips = bin and bin:GetClipList() or nil end)
      if clips ~= nil then
        for _, c in ipairs(clips) do
          local nm = ""
          pcall(function() nm = string.lower(tostring(c:GetName() or "")) end)
          if nm == base then musicItem = c break end
        end
      end
    end
    if musicItem == nil then
      table.insert(warn, "Musique introuvable ou non importée : " .. opts.musicPath)
    else
      local aTrack = opts.muteRushes and 1 or 2
      if aTrack == 2 then
        pcall(function() timeline:AddTrack("audio", "stereo") end)
      end
      local aFrames = clipFrames(musicItem, tlFps)
      if aFrames <= 0 then
        local plain = { mediaPoolItem = musicItem, mediaType = 2, trackIndex = aTrack }
        if tlStart ~= nil then plain.recordFrame = tlStart end
        musicOk = appendOne(mediaPool, plain, false)
        if not musicOk then
          table.insert(warn, "La musique n'a pas pu être posée sur la timeline.")
        end
      else
        local covered, iter = 0, 0
        while covered < vidFrames and iter < 50 do
          iter = iter + 1
          local chunk = math.min(aFrames, vidFrames - covered)
          if chunk < 1 then break end
          local info = { mediaPoolItem = musicItem, startFrame = 0,
                         endFrame = chunk - 1, mediaType = 2, trackIndex = aTrack }
          if tlStart ~= nil then info.recordFrame = tlStart + covered end
          if not appendOne(mediaPool, info, false) then
            table.insert(warn, "La musique n'a pas pu être posée entièrement.")
            break
          end
          musicOk = true
          covered = covered + chunk
        end
      end
      if musicOk then say("Musique ajoutée sur la piste audio " .. aTrack .. ".") end
    end
  end

  -- 7) Titre d'ouverture -----------------------------------------------------------
  local titleOk = false
  if opts.title ~= "" then
    pcall(function()
      timeline:SetCurrentTimecode(timeline:GetStartTimecode())
    end)
    local ok = pcall(function()
      local tItem = timeline:InsertFusionTitleIntoTimeline("Text+")
      if tItem == nil then error("insertion refusée") end
      local comp = tItem:GetFusionCompByIndex(1)
      if comp ~= nil then
        local tool = comp:FindToolByID("TextPlus")
        if tool ~= nil then tool:SetInput("StyledText", opts.title) end
      end
    end)
    titleOk = ok
    if not ok then
      table.insert(warn, "Le titre n'a pas pu être inséré automatiquement " ..
                         "(ajoutez un Text+ depuis l'onglet Effets).")
    end
  end

  -- 8) Export --------------------------------------------------------------------
  local renderMsg = nil
  if opts.autoRender then
    local outDir = opts.outDir ~= "" and opts.outDir or opts.srcDir
    local presets = {}
    pcall(function() presets = project:GetRenderPresetList() or {} end)
    local function presetName(p)
      if type(p) == "table" then return tostring(p.Name or p.PresetName or p[1] or "") end
      return tostring(p)
    end
    local chosen = nil
    for _, p in ipairs(presets) do
      if presetName(p) == "H.264 Master" then chosen = presetName(p) break end
    end
    if chosen == nil then
      for _, p in ipairs(presets) do
        local nm = presetName(p)
        if nm:find("H%.264") or nm:find("YouTube") then chosen = nm break end
      end
    end
    if chosen ~= nil then
      pcall(function() project:LoadRenderPreset(chosen) end)
    else
      pcall(function() project:SetCurrentRenderFormatAndCodec("mp4", "H264") end)
    end
    local safeName = tlName:gsub('[\\/:*?"<>|]', "-")
    pcall(function()
      project:SetRenderSettings({ TargetDir = outDir, CustomName = safeName })
    end)
    local jobId = nil
    pcall(function() jobId = project:AddRenderJob() end)
    if jobId ~= nil then
      local started = false
      pcall(function() started = project:StartRendering(jobId) end)
      if not started then
        pcall(function() started = project:StartRendering() end)
      end
      if started then
        renderMsg = "Export lancé vers : " .. outDir .. SEP .. safeName .. ".mp4"
        pcall(function() R:OpenPage("deliver") end)
      else
        renderMsg = "Fichier d'export préparé dans la file de la page « Exporter » " ..
                    "(cliquez sur « Démarrer le rendu »)."
        pcall(function() R:OpenPage("deliver") end)
      end
    else
      table.insert(warn, "Impossible de préparer l'export automatique.")
      pcall(function() R:OpenPage("edit") end)
    end
  else
    pcall(function() R:OpenPage("edit") end)
  end

  -- 9) Bilan ----------------------------------------------------------------------
  table.insert(lines, "✅ Montage terminé !")
  table.insert(lines, "")
  table.insert(lines, "Timeline : " .. tlName)
  table.insert(lines, "Chutier  : " .. binName)
  table.insert(lines, "Plans montés : " .. appended ..
                      (photosUsed > 0 and (" (dont " .. photosUsed .. " photo(s))") or ""))
  table.insert(lines, "Durée : " .. fmtSec(vidFrames / tlFps) ..
                      " (objectif : " .. fmtSec(opts.target) .. ")")
  if plannedSec < opts.target - 1 then
    table.insert(lines, "ℹ️ Pas assez de rushes pour atteindre la durée demandée.")
  end
  if opts.musicPath ~= "" then
    table.insert(lines, "Musique : " .. (musicOk and "ajoutée ✔" or "non ajoutée ✖"))
  end
  if opts.title ~= "" then
    table.insert(lines, "Titre : " .. (titleOk and "ajouté ✔" or "non ajouté ✖"))
  end
  if renderMsg ~= nil then
    table.insert(lines, "")
    table.insert(lines, renderMsg)
  end
  if #warn > 0 then
    table.insert(lines, "")
    table.insert(lines, "Avertissements :")
    for _, w in ipairs(warn) do table.insert(lines, "  • " .. w) end
  end
  table.insert(lines, "")
  table.insert(lines, "Touches finales conseillées :")
  table.insert(lines, "  • Fondus : sélectionnez tous les plans (Ctrl/Cmd+A)")
  table.insert(lines, "    puis Ctrl/Cmd+T pour ajouter des fondus enchaînés partout.")
  table.insert(lines, "  • Volume de la musique : onglet Fairlight.")
  return table.concat(lines, "\n")
end

-- ============================ Interface graphique ===========================

local ui = fusionApp.UIManager
local disp = bmd.UIDispatcher(ui)

local function showTextWindow(title, text)
  local w = disp:AddWindow({
    ID = "AMInfoWin",
    WindowTitle = title,
    Geometry = { 320, 260, 620, 460 },
  }, ui:VGroup{
    ID = "infoRoot",
    Spacing = 8,
    ui:TextEdit{ ID = "InfoText", ReadOnly = true, Text = text },
    ui:Button{ ID = "InfoClose", Text = "Fermer", Weight = 0 },
  })
  w.On.InfoClose.Clicked = function(ev) disp:ExitLoop() end
  w.On.AMInfoWin.Close = function(ev) disp:ExitLoop() end
  w:Show()
  disp:RunLoop()
  w:Hide()
end

local win = disp:AddWindow({
  ID = "AMWin",
  WindowTitle = "AutoMontage — Montage automatique",
  Geometry = { 260, 160, 700, 620 },
}, ui:VGroup{
  ID = "root",
  Spacing = 6,

  ui:Label{ Text = "🎬  AutoMontage", Weight = 0,
            StyleSheet = "font-size: 20px; font-weight: bold; padding: 4px;" },
  ui:Label{ Weight = 0, WordWrap = true,
            Text = "Choisissez un dossier de rushes : le script importe, découpe et " ..
                   "assemble un montage complet à votre place." },

  ui:VGap(6),

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Dossier des rushes *", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:LineEdit{ ID = "SrcDir", PlaceholderText = "Dossier contenant vos vidéos", Weight = 1 },
    ui:Button{ ID = "BrowseSrc", Text = "Parcourir…", Weight = 0 },
  },

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Musique (facultatif)", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:LineEdit{ ID = "MusicPath", PlaceholderText = "Fichier MP3, WAV, M4A…", Weight = 1 },
    ui:Button{ ID = "BrowseMusic", Text = "Parcourir…", Weight = 0 },
  },

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:CheckBox{ ID = "MuteRushes", Weight = 1, Checked = true,
                 Text = "Couper le son des rushes (garder uniquement la musique)" },
  },

  ui:VGap(6),

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Durée cible (secondes)", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:SpinBox{ ID = "Target", Value = 60, Minimum = 10, Maximum = 7200, Weight = 0,
                MinimumSize = { 90, 0 } },
    ui:Label{ Text = "  Rythme", Weight = 0 },
    ui:ComboBox{ ID = "Style", Weight = 1 },
  },

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Ordre des plans", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:ComboBox{ ID = "Order", Weight = 1 },
  },

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Photos", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:CheckBox{ ID = "UsePhotos", Text = "Inclure les photos du dossier,", Weight = 0 },
    ui:DoubleSpinBox{ ID = "PhotoSec", Value = 3.0, Minimum = 1.0, Maximum = 15.0,
                      SingleStep = 0.5, Decimals = 1, Weight = 0, MinimumSize = { 80, 0 } },
    ui:Label{ Text = "s chacune", Weight = 1 },
  },

  ui:VGap(6),

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Titre d'ouverture", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:LineEdit{ ID = "TitleText", PlaceholderText = "Ex. : Palais Florentin — Beausoleil (laisser vide pour aucun)", Weight = 1 },
  },

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Nom de la timeline", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:LineEdit{ ID = "TlName", Weight = 1 },
  },

  ui:VGap(6),

  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Export", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:CheckBox{ ID = "AutoRender", Checked = true, Weight = 1,
                 Text = "Exporter automatiquement en MP4 (H.264) à la fin" },
  },
  ui:HGroup{ Weight = 0,
    ui:Label{ Text = "Dossier d'export", MinimumSize = { 185, 0 }, Weight = 0 },
    ui:LineEdit{ ID = "OutDir", PlaceholderText = "Vide = dossier des rushes", Weight = 1 },
    ui:Button{ ID = "BrowseOut", Text = "Parcourir…", Weight = 0 },
  },

  ui:VGap(8),
  ui:Label{ ID = "Status", Text = "", Weight = 0, WordWrap = true,
            StyleSheet = "color: rgb(240,160,60); font-weight: bold;" },

  ui:HGroup{ Weight = 0,
    ui:Button{ ID = "Cancel", Text = "Annuler", Weight = 0 },
    ui:HGap(0, 1),
    ui:Button{ ID = "Go", Text = "🎬  Créer le montage", Weight = 0,
               MinimumSize = { 200, 34 } },
  },
})

local itm = win:GetItems()
for _, s in ipairs(STYLES) do itm.Style:AddItem(s.name) end
itm.Style.CurrentIndex = 1
itm.Order:AddItem("Ordre alphabétique (nom de fichier)")
itm.Order:AddItem("Aléatoire (mélangé)")
itm.Order.CurrentIndex = 0
itm.TlName.Text = "AutoMontage " .. os.date("%d-%m-%Y %Hh%M")

local function browseDir(field)
  local ok, path = pcall(function() return fusionApp:RequestDir() end)
  if ok and path ~= nil and tostring(path) ~= "" then
    itm[field].Text = tostring(path)
  else
    itm.Status.Text = "Si la fenêtre de sélection ne s'ouvre pas, collez le chemin du dossier dans le champ."
  end
end

win.On.BrowseSrc.Clicked = function(ev) browseDir("SrcDir") end
win.On.BrowseOut.Clicked = function(ev) browseDir("OutDir") end
win.On.BrowseMusic.Clicked = function(ev)
  local ok, path = pcall(function() return fusionApp:RequestFile() end)
  if ok and path ~= nil and tostring(path) ~= "" then
    itm.MusicPath.Text = tostring(path)
  else
    itm.Status.Text = "Si la fenêtre de sélection ne s'ouvre pas, collez le chemin du fichier dans le champ."
  end
end

local runRequested = false
local opts = nil

win.On.Go.Clicked = function(ev)
  local srcDir = stripTrailingSep(trimStr(itm.SrcDir.Text))
  if srcDir == "" then
    itm.Status.Text = "⚠️ Indiquez le dossier qui contient vos vidéos."
    return
  end
  if listDir(srcDir) == nil then
    itm.Status.Text = "⚠️ Dossier introuvable : " .. srcDir
    return
  end
  local musicPath = trimStr(itm.MusicPath.Text)
  if musicPath ~= "" and not AUDIO_EXT[fileExt(musicPath)] then
    itm.Status.Text = "⚠️ La musique doit être un fichier audio (MP3, WAV, M4A, AIFF, FLAC…)."
    return
  end
  local style = STYLES[(itm.Style.CurrentIndex or 0) + 1] or STYLES[2]
  local tlName = trimStr(itm.TlName.Text)
  if tlName == "" then tlName = "AutoMontage " .. os.date("%d-%m-%Y %Hh%M") end
  opts = {
    srcDir       = srcDir,
    musicPath    = musicPath,
    muteRushes   = itm.MuteRushes.Checked and true or false,
    target       = tonumber(itm.Target.Value) or 60,
    minSeg       = style.min,
    maxSeg       = style.max,
    order        = itm.Order.CurrentIndex or 0,
    usePhotos    = itm.UsePhotos.Checked and true or false,
    photoSec     = tonumber(itm.PhotoSec.Value) or 3.0,
    title        = trimStr(itm.TitleText.Text),
    timelineName = tlName,
    autoRender   = itm.AutoRender.Checked and true or false,
    outDir       = stripTrailingSep(trimStr(itm.OutDir.Text)),
  }
  runRequested = true
  disp:ExitLoop()
end

win.On.Cancel.Clicked = function(ev) disp:ExitLoop() end
win.On.AMWin.Close = function(ev) disp:ExitLoop() end

win:Show()
disp:RunLoop()
win:Hide()

if runRequested and opts ~= nil then
  print("[AutoMontage] Démarrage du montage automatique…")
  local okRun, resultOrErr = pcall(function() return runEngine(opts) end)
  if okRun then
    showTextWindow("AutoMontage — Terminé", tostring(resultOrErr))
  else
    showTextWindow("AutoMontage — Erreur",
      "❌ Le montage n'a pas pu aboutir :\n\n" .. tostring(resultOrErr) ..
      "\n\nAstuce : ouvrez la console (Espace de travail ▸ Console) pour plus de détails," ..
      "\npuis relancez le script.")
  end
end
