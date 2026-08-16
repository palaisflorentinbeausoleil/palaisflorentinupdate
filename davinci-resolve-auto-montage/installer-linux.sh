#!/bin/bash
# ============================================================
#  AutoMontage — Installation pour DaVinci Resolve (Linux)
#  Copie AutoMontage.lua dans le dossier des scripts Resolve.
#  Usage : bash installer-linux.sh
# ============================================================

HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$HERE/AutoMontage.lua"

if [ ! -f "$SRC" ]; then
  echo "❌ AutoMontage.lua est introuvable à côté de cet installeur."
  exit 1
fi

DEST="$HOME/.local/share/DaVinciResolve/Fusion/Scripts/Utility"
mkdir -p "$DEST"
cp -f "$SRC" "$DEST/"

echo "✅ Installation terminée : $DEST/AutoMontage.lua"
echo "Redémarrez DaVinci Resolve puis : Espace de travail (Workspace) ▸ Scripts ▸ AutoMontage"
