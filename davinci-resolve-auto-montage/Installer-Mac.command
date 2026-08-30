#!/bin/bash
# ============================================================
#  AutoMontage — Installation pour DaVinci Resolve (macOS)
#  Copie AutoMontage.lua dans le dossier des scripts Resolve.
#
#  Si macOS bloque l'ouverture : clic droit sur ce fichier
#  puis « Ouvrir », et confirmez.
# ============================================================

HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$HERE/AutoMontage.lua"

if [ ! -f "$SRC" ]; then
  echo "❌ AutoMontage.lua est introuvable à côté de cet installeur."
  echo "   Dézippez d'abord tout le dossier, puis relancez ce fichier."
  read -r -p "Appuyez sur Entrée pour fermer…" _
  exit 1
fi

# Resolve lit les scripts utilisateur à l'un de ces deux emplacements
# selon les versions : on installe aux deux pour être sûr.
DEST1="$HOME/Library/Application Support/Blackmagic Design/DaVinci Resolve/Fusion/Scripts/Utility"
DEST2="$HOME/Library/Application Support/Blackmagic Design/DaVinci Resolve/Support/Fusion/Scripts/Utility"

mkdir -p "$DEST1" "$DEST2"
cp -f "$SRC" "$DEST1/" && cp -f "$SRC" "$DEST2/"

echo ""
echo "  ============================================"
echo "   ✅ Installation terminée avec succès !"
echo "  ============================================"
echo ""
echo "  1. Redémarrez DaVinci Resolve"
echo "  2. Menu : Espace de travail (Workspace) ▸ Scripts ▸ AutoMontage"
echo ""
read -r -p "Appuyez sur Entrée pour fermer…" _
