# 🎯 GUIDE DES FONCTIONNALITÉS ADMIN - Palais Florentin

## 🔐 **ACCÈS À L'ADMIN**

- **URL** : `http://localhost:3000/admin`
- **Mot de passe** : `palais2024`

---

## 📊 **ONGLETS DISPONIBLES**

### **1. 🏷️ Prix (Pricing)**
Configuration des tarifs de base par saison et événements spéciaux.

**Tarifs configurables :**
- **Basse saison** : Prix hivernal (octobre à mars)
- **Haute saison** : Prix estival (avril à septembre)
- **Grand Prix F1** : Prix spécial pour l'événement (mai)
- **Monaco Yacht Show** : Prix spécial pour l'événement (septembre)

**Utilisation :**
1. Modifiez les prix dans les champs correspondants
2. Cliquez sur "Sauvegarder les Prix"
3. Les modifications sont sauvegardées automatiquement

---

### **2. 🌟 Saisons (Custom Seasons)**
**NOUVEAU !** Création et gestion de saisons personnalisées avec des prix spécifiques.

**Fonctionnalités :**
- ✅ **Ajouter une saison** : Nom, dates, prix, description
- ✅ **Gérer les saisons** : Voir, modifier, supprimer
- ✅ **Périodes flexibles** : Début et fin de saison personnalisables
- ✅ **Prix dédiés** : Tarifs spécifiques par saison

**Exemples d'utilisation :**
- **Festival de Cannes** : 15-25 mai, 450€/nuit
- **Saison d'été** : 1er juillet - 31 août, 380€/nuit
- **Événements sportifs** : Périodes spécifiques avec tarifs adaptés

**Comment ajouter une saison :**
1. Cliquez sur "+ Ajouter une Saison"
2. Remplissez le formulaire :
   - **Nom** : Nom de la saison (obligatoire)
   - **Prix** : Tarif par nuit en euros (obligatoire)
   - **Date de début** : Sélectionnez la date de début
   - **Date de fin** : Sélectionnez la date de fin
   - **Description** : Informations supplémentaires (optionnel)
3. Cliquez sur "Ajouter la Saison"

---

### **3. 💰 Prix Spéciaux (Special Pricing)**
Définition de tarifs personnalisés sur des dates spécifiques.

**Fonctionnalités :**
- ✅ **Prix par date** : Tarifs individuels sur des jours précis
- ✅ **Priorité élevée** : Surcharge les prix de saison
- ✅ **Gestion complète** : Ajouter, modifier, supprimer
- ✅ **Raisons** : Justification des prix spéciaux

**Utilisation :**
1. **Sélectionnez une date** dans le calendrier
2. **Entrez le prix spécial** en euros
3. **Ajoutez une raison** (optionnel)
4. **Cliquez sur "Ajouter le Prix Spécial"**

**Exemples :**
- **Réveillon** : 31 décembre, 500€, "Nouvel An"
- **Festival** : 15 mai, 400€, "Festival de Cannes"
- **Promotion** : 20 janvier, 180€, "Offre hivernale"

---

### **4. 📅 Disponibilités (Availability)**
Gestion du calendrier et blocage de dates.

**Fonctionnalités :**
- ✅ **Bloquer des dates** : Maintenance, fermeture, indisponibilité
- ✅ **Débloquer des dates** : Remise en disponibilité
- ✅ **Sélection multiple** : Plusieurs dates à la fois
- ✅ **Raisons de blocage** : Justification automatique

**Utilisation :**
1. **Sélectionnez des dates** dans le calendrier
2. **Cliquez sur "Bloquer les Dates Sélectionnées"**
3. **Pour débloquer** : Sélectionnez et cliquez sur "Débloquer"

---

### **5. 📊 Aperçu (Overview)**
Vue d'ensemble des configurations et statistiques.

**Informations affichées :**
- 📈 **Nombre de prix spéciaux** configurés
- 🗓️ **Dates bloquées** actuellement
- 🌟 **Saisons personnalisées** créées
- 💰 **Prix de base** par saison

---

## 🔄 **HIÉRARCHIE DES PRIX (Priorité)**

### **Ordre de priorité (du plus élevé au plus bas) :**
1. **Prix spéciaux par date** (priorité maximale)
2. **Saisons personnalisées** (périodes définies)
3. **Prix de saison** (basse/haute saison)
4. **Prix par défaut** (si aucune saison n'est définie)

**Exemple concret :**
- **1er janvier** : Prix spécial 300€ (priorité 1)
- **15-20 janvier** : Saison "Offre hivernale" 180€ (priorité 2)
- **Janvier normal** : Basse saison 150€ (priorité 3)

---

## 💾 **SAUVEGARDE ET PERSISTANCE**

### **Stockage local :**
- ✅ **localStorage** : Sauvegarde automatique en local
- ✅ **Persistance** : Données conservées entre les sessions
- ✅ **Synchronisation** : Mise à jour en temps réel

### **Supabase (optionnel) :**
- 🔄 **Tentative de sauvegarde** sur la base de données
- ⚠️ **Fallback local** si Supabase n'est pas disponible
- 📊 **Synchronisation** des données entre appareils

---

## 🎨 **INTERFACE UTILISATEUR**

### **Design moderne :**
- 🎨 **Interface intuitive** avec onglets organisés
- 🟢 **Couleurs cohérentes** : Vert pour les saisons, bleu pour les prix spéciaux
- 📱 **Responsive** : Compatible mobile et desktop
- ⚡ **Réactivité** : Mise à jour instantanée des données

### **Validation des données :**
- ✅ **Champs obligatoires** marqués avec *
- ⚠️ **Messages d'erreur** clairs et informatifs
- 🎯 **Feedback utilisateur** : Confirmations de succès
- 🔒 **Sécurité** : Validation des entrées

---

## 🚀 **CAS D'USAGE PRATIQUES**

### **Gestion d'un événement :**
1. **Créez une saison** "Festival de Cannes" (15-25 mai, 450€)
2. **Ajoutez des prix spéciaux** pour des dates spécifiques
3. **Bloquez des dates** si nécessaire pour la préparation

### **Gestion saisonnière :**
1. **Configurez les prix de base** (basse/haute saison)
2. **Créez des saisons intermédiaires** (printemps, automne)
3. **Ajustez les tarifs** selon la demande

### **Promotions et offres :**
1. **Définissez des périodes** de promotion
2. **Appliquez des tarifs réduits** sur ces périodes
3. **Suivez l'impact** via l'aperçu

---

## 🔧 **DÉPANNAGE**

### **Problèmes courants :**
- **Page 404** : Vérifiez que la route `/admin` est configurée
- **Données perdues** : Vérifiez le localStorage du navigateur
- **Erreurs de validation** : Remplissez tous les champs obligatoires

### **Support :**
- 📧 **Email** : brem.collection@gmail.com
- 📱 **Téléphone** : +33 6 12 16 93 20

---

## ✨ **FONCTIONNALITÉS FUTURES**

### **En développement :**
- 🔗 **Synchronisation Supabase** complète
- 📊 **Statistiques avancées** de réservation
- 🎯 **Gestion des clients** et historique
- 📱 **Application mobile** dédiée

---

**🎉 L'interface admin est maintenant complète avec la gestion des saisons personnalisées et des prix spéciaux !**
