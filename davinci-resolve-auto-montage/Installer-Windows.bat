@echo off
rem ============================================================
rem  AutoMontage - Installation pour DaVinci Resolve (Windows)
rem  Copie AutoMontage.lua dans le dossier des scripts Resolve.
rem ============================================================

set "DEST=%APPDATA%\Blackmagic Design\DaVinci Resolve\Support\Fusion\Scripts\Utility"

if not exist "%~dp0AutoMontage.lua" (
    echo [ERREUR] AutoMontage.lua est introuvable a cote de cet installeur.
    echo Dezippez d'abord tout le dossier, puis relancez ce fichier.
    pause
    exit /b 1
)

if not exist "%DEST%" mkdir "%DEST%"
copy /Y "%~dp0AutoMontage.lua" "%DEST%\" >nul

if exist "%DEST%\AutoMontage.lua" (
    echo.
    echo  ============================================
    echo   Installation terminee avec succes !
    echo  ============================================
    echo.
    echo  1. Redemarrez DaVinci Resolve
    echo  2. Menu : Espace de travail ^(Workspace^) ^> Scripts ^> AutoMontage
    echo.
) else (
    echo [ERREUR] La copie a echoue. Copiez manuellement AutoMontage.lua vers :
    echo %DEST%
)
pause
