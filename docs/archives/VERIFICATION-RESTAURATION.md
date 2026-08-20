# 🔍 VÉRIFICATION ET RESTAURATION DES DONNÉES PERDUES

## 🚨 **PROBLÈME :**
Vos dates bloquées et configurations d'hier ont été perdues. Vérifions et restaurons !

---

## 🔍 **VÉRIFICATION IMMÉDIATE :**

### **1. Ouvrez la console (F12) et copiez-collez ce script :**

```javascript
// 🔍 VÉRIFICATION COMPLÈTE DES DONNÉES
console.log('🔍 VÉRIFICATION DES DONNÉES PERDUES...');

// Vérification localStorage
const localBlockedDates = localStorage.getItem('admin-blocked-dates');
const localSpecialPricing = localStorage.getItem('admin-special-pricing');
const localPricing = localStorage.getItem('admin-pricing');

console.log('📱 DONNÉES LOCALES:');
console.log('🚫 Dates bloquées:', localBlockedDates ? JSON.parse(localBlockedDates) : '❌ Aucune');
console.log('🎯 Prix spéciaux:', localSpecialPricing ? JSON.parse(localSpecialPricing) : '❌ Aucun');
console.log('💰 Prix de saison:', localPricing ? JSON.parse(localPricing) : '❌ Aucun');

// Vérification Supabase
console.log('\n☁️ VÉRIFICATION SUPABASE...');
fetch('https://qgdihvabholkdvcxreey.supabase.co/rest/v1/blocked_dates?select=*', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnZGlodmFiaG9sa2R2Y3hyZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNTQxOTgsImV4cCI6MjA3MDgzMDE5OH0.vbmj7t43Erjn7wZXiBZLAZIF4Kzm832VnfSyWre3vKA'
  }
})
.then(response => response.json())
.then(data => {
  console.log('☁️ Dates bloquées Supabase:', data);
  if (data && data.length > 0) {
    console.log('✅ Données trouvées dans Supabase !');
    // Restaurer automatiquement
    localStorage.setItem('admin-blocked-dates', JSON.stringify(data));
    console.log('✅ Données restaurées dans localStorage');
  } else {
    console.log('❌ Aucune donnée dans Supabase');
  }
})
.catch(error => {
  console.log('❌ Erreur Supabase:', error);
});

// Vérification prix spéciaux Supabase
fetch('https://qgdihvabholkdvcxreey.supabase.co/rest/v1/special_pricing?select=*', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnZGlodmFiaG9sa2R2Y3hyZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNTQxOTgsImV4cCI6MjA3MDgzMDE5OH0.vbmj7t43Erjn7wZXiBZLAZIF4Kzm832VnfSyWre3vKA'
  }
})
.then(response => response.json())
.then(data => {
  console.log('☁️ Prix spéciaux Supabase:', data);
  if (data && data.length > 0) {
    localStorage.setItem('admin-special-pricing', JSON.stringify(data));
    console.log('✅ Prix spéciaux restaurés');
  }
})
.catch(error => console.log('❌ Erreur prix spéciaux:', error));
```

---

## 🔧 **RESTAURATION MANUELLE :**

### **Si aucune donnée n'est trouvée, utilisez ce script :**

```javascript
// 🔧 RESTAURATION MANUELLE DES DONNÉES
console.log('🔧 RESTAURATION MANUELLE...');

// Restaurer des dates bloquées de test (remplacez par vos vraies dates)
const blockedDates = [
  { id: 'temp-1', date: '2025-10-01', reason: 'Maintenance' },
  { id: 'temp-2', date: '2025-10-02', reason: 'Maintenance' },
  { id: 'temp-3', date: '2025-10-03', reason: 'Maintenance' },
  { id: 'temp-4', date: '2025-10-04', reason: 'Maintenance' },
  { id: 'temp-5', date: '2025-10-05', reason: 'Maintenance' },
  { id: 'temp-6', date: '2025-10-06', reason: 'Maintenance' },
  { id: 'temp-7', date: '2025-10-07', reason: 'Maintenance' }
];

// Restaurer des prix spéciaux de test
const specialPricing = [
  { id: 'temp-1', date: '2025-10-15', price: 300, reason: 'Événement spécial' },
  { id: 'temp-2', date: '2025-10-16', price: 300, reason: 'Événement spécial' }
];

// Restaurer les prix de saison
const pricing = {
  low_season_price: 150,
  high_season_price: 250,
  grand_prix_price: 950,
  yacht_show_price: 450
};

// Sauvegarder dans localStorage
localStorage.setItem('admin-blocked-dates', JSON.stringify(blockedDates));
localStorage.setItem('admin-special-pricing', JSON.stringify(specialPricing));
localStorage.setItem('admin-pricing', JSON.stringify(pricing));

console.log('✅ Données restaurées !');
console.log('📅 Dates bloquées:', blockedDates.length);
console.log('🎯 Prix spéciaux:', specialPricing.length);
console.log('💰 Prix de saison:', pricing);

// Recharger la page pour appliquer les changements
console.log('🔄 Rechargez la page pour voir les changements');
```

---

## 🎯 **VÉRIFICATION POST-RESTAURATION :**

### **1. Allez sur l'Admin :**
```
http://localhost:3001/admin
Mot de passe : palais2024
```

### **2. Vérifiez les onglets :**
- **Dates bloquées** : Devrait afficher vos dates
- **Prix spéciaux** : Devrait afficher vos prix
- **Prix des saisons** : Devrait afficher vos tarifs

### **3. Testez le calendrier :**
```
http://localhost:3001/reserver
```
- Les dates bloquées doivent être grisées
- Impossible de les sélectionner

---

## 🚀 **PROCHAINES ÉTAPES :**

1. **Exécutez** le script de vérification
2. **Dites-moi** ce que vous voyez dans la console
3. **Si nécessaire** : exécutez le script de restauration
4. **Vérifiez** l'Admin et le calendrier

---

**🎯 Exécutez le premier script et dites-moi ce que vous voyez !**

**Je vous aiderai à restaurer vos configurations !** 🔄✨
