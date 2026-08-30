# 🎬 AutoMontage — Montage vidéo automatique pour DaVinci Resolve

AutoMontage est un plugin (script) pour **DaVinci Resolve** qui fait un premier
montage complet **à votre place** : vous lui montrez un dossier de rushes, il
importe, découpe, assemble, pose la musique, ajoute un titre et lance l'export.

Il fonctionne avec la **version gratuite** de DaVinci Resolve (18 ou plus
récent), sans rien installer d'autre : ni Python, ni dépendance.

---

## ✨ Ce que fait le plugin

1. **Importe** toutes les vidéos (et les photos, en option) d'un dossier dans
   un chutier dédié du projet.
2. **Crée une timeline** au nom de votre choix.
3. **Découpe automatiquement** chaque plan : les tout débuts et toutes fins de
   clips (souvent tremblés) sont évités, et les plans sont alternés entre les
   différents clips pour donner de la variété.
4. **Respecte la durée cible** que vous demandez (ex. 60 secondes) et le
   **rythme** choisi :
   - *Dynamique* : plans courts de 1,5 à 3 s (réseaux sociaux, teaser) ;
   - *Équilibré* : plans de 3 à 5 s (présentation classique) ;
   - *Contemplatif* : plans de 5 à 8 s (immobilier, paysages, ambiance).
5. **Pose la musique** sous l'image (mise en boucle si elle est plus courte que
   le montage) et peut **couper le son des rushes** pour ne garder que la
   musique.
6. **Ajoute un titre d'ouverture** (Text+) si vous en saisissez un.
7. **Lance l'export MP4 (H.264)** automatiquement si vous le souhaitez.

À la fin, un récapitulatif s'affiche et la timeline reste ouverte : vous pouvez
ajuster ce que vous voulez, comme sur n'importe quel montage.

---

## 📦 Installation

### Windows

1. Téléchargez ce dossier (sur GitHub : bouton vert **Code** ▸ **Download ZIP**,
   puis dézippez).
2. Double-cliquez sur **`Installer-Windows.bat`**.
3. Redémarrez DaVinci Resolve.

### macOS

1. Téléchargez et dézippez ce dossier.
2. **Clic droit** sur **`Installer-Mac.command`** ▸ **Ouvrir** ▸ confirmez
   (le clic droit est nécessaire la première fois, macOS bloque sinon les
   fichiers téléchargés).
3. Redémarrez DaVinci Resolve.

### Linux

```bash
bash installer-linux.sh
```

### Installation manuelle (toutes plateformes)

Copiez simplement le fichier `AutoMontage.lua` dans le dossier des scripts de
Resolve, puis redémarrez Resolve :

| Système | Dossier |
|---|---|
| Windows | `%APPDATA%\Blackmagic Design\DaVinci Resolve\Support\Fusion\Scripts\Utility` |
| macOS | `~/Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts/Utility` |
| Linux | `~/.local/share/DaVinciResolve/Fusion/Scripts/Utility` |

> Astuce macOS : dans le Finder, menu **Aller ▸ Aller au dossier…** et collez le
> chemin ci-dessus (créez les sous-dossiers manquants si besoin).

---

## 🚀 Utilisation

1. Mettez toutes les vidéos d'un même projet dans **un seul dossier** sur votre
   ordinateur (ex. `Rushes vacances` ou `Vidéos villa`).
2. Ouvrez DaVinci Resolve et **ouvrez (ou créez) un projet**.
3. Menu **Espace de travail** (ou *Workspace* en anglais) ▸ **Scripts** ▸
   **AutoMontage**.
4. Remplissez la fenêtre :

   | Champ | À quoi ça sert |
   |---|---|
   | **Dossier des rushes** | Le dossier qui contient vos vidéos (obligatoire). |
   | **Musique** | Un fichier MP3/WAV/M4A… posé sous tout le montage (facultatif). |
   | **Couper le son des rushes** | Coché : on n'entend que la musique. Décoché : le son d'ambiance des vidéos est conservé. |
   | **Durée cible** | La durée du montage final, en secondes (60 par défaut). |
   | **Rythme** | Dynamique / Équilibré / Contemplatif (longueur des plans). |
   | **Ordre des plans** | Alphabétique (nommez vos fichiers `01…`, `02…` pour contrôler l'ordre) ou aléatoire. |
   | **Photos** | Inclure aussi les photos du dossier, avec une durée fixe chacune. |
   | **Titre d'ouverture** | Un texte affiché au début (ex. « Palais Florentin — Beausoleil »). |
   | **Export automatique** | Exporte le montage en MP4 (H.264) dès la fin, dans le dossier de votre choix (par défaut : le dossier des rushes). |

5. Cliquez sur **🎬 Créer le montage** et laissez travailler (quelques secondes
   à quelques minutes selon le nombre de fichiers).
6. Lisez le récapitulatif, puis profitez : la timeline est prête dans la page
   **Montage**, et si l'export automatique est coché, le rendu tourne dans la
   page **Exporter**.

### Touches finales conseillées (10 secondes chrono)

- **Fondus enchaînés partout** : dans la timeline, `Ctrl/Cmd + A` (tout
  sélectionner) puis `Ctrl/Cmd + T`.
- **Volume de la musique** : page **Fairlight**, baissez ou montez le fader de
  la piste musique.
- **Sous-titres automatiques** (Resolve 18.5+) : menu
  **Timeline ▸ Créer des sous-titres à partir de l'audio**.

---

## 🧠 Comment il choisit les plans

Le script ne « regarde » pas le contenu des images : il applique des règles de
monteur qui donnent un résultat propre sur des rushes ordinaires :

- il écarte environ 10 % au début et à la fin de chaque clip (mise en place,
  tremblements, doigt sur l'objectif…) ;
- il fait tourner les clips en boucle (un plan de chaque, puis on recommence)
  pour éviter deux plans consécutifs de la même vidéo ;
- lorsqu'un clip est réutilisé, il reprend **plus loin** dans le clip, pour ne
  jamais montrer deux fois la même chose ;
- les longueurs de plans varient autour du rythme choisi pour éviter l'effet
  « métronome ».

## ⚠️ Limites connues (honnêtement)

- **Pas d'analyse d'image ni de son** : le script ne détecte pas les visages,
  les moments forts ni le tempo de la musique. Il fait un montage propre et
  rythmé, pas un choix artistique — c'est un excellent premier jet à retoucher.
- **Les fondus/transitions** ne peuvent pas être ajoutés par script dans
  Resolve : c'est le raccourci `Ctrl/Cmd + A` puis `Ctrl/Cmd + T` (2 secondes).
- Les formats exotiques non lus par Resolve sont ignorés (un avertissement
  s'affiche).

## 🛠️ Dépannage

| Problème | Solution |
|---|---|
| Le menu **Scripts** est vide ou sans « AutoMontage » | Vérifiez que `AutoMontage.lua` est bien dans le dossier `…/Fusion/Scripts/Utility` (voir tableau ci-dessus), puis redémarrez Resolve. |
| « Aucun projet ouvert » | Créez ou ouvrez un projet avant de lancer le script. |
| « Aucune vidéo trouvée » | Vérifiez le chemin du dossier et que les fichiers sont bien des vidéos (MP4, MOV…). |
| Le bouton **Parcourir…** ne fait rien | Collez directement le chemin du dossier dans le champ (copiez-le depuis l'Explorateur/le Finder). |
| Une erreur s'affiche | Ouvrez **Espace de travail ▸ Console** pour le détail, et relancez le script. |

## 🗑️ Désinstallation

Supprimez le fichier `AutoMontage.lua` du dossier `…/Fusion/Scripts/Utility`
(voir tableau d'installation). C'est tout.
