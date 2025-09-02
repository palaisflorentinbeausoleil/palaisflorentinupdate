# 🔧 SOLUTION DIRECTE - FORCER LE RECHARGEMENT

## 🚨 **PROBLÈME :**
Les dates bloquées ne s'affichent pas dans l'Admin. Forçons le rechargement !

---

## 🔧 **SOLUTION DIRECTE :**

### **1. Ouvrez la console (F12) et copiez-collez ce script :**

```javascript
// 🔧 SOLUTION DIRECTE - FORCER LE RECHARGEMENT
console.log('🔧 SOLUTION DIRECTE EN COURS...');

// 1. Vider complètement le localStorage
localStorage.removeItem('admin-blocked-dates');
localStorage.removeItem('admin-special-pricing');
localStorage.removeItem('admin-pricing');

// 2. Recréer les données
const blockedDates = [
  { id: 'temp-1', date: '2025-10-01', reason: 'Maintenance' },
  { id: 'temp-2', date: '2025-10-02', reason: 'Maintenance' },
  { id: 'temp-3', date: '2025-10-03', reason: 'Maintenance' },
  { id: 'temp-4', date: '2025-10-04', reason: 'Maintenance' },
  { id: 'temp-5', date: '2025-10-05', reason: 'Maintenance' },
  { id: 'temp-6', date: '2025-10-06', reason: 'Maintenance' },
  { id: 'temp-7', date: '2025-10-07', reason: 'Maintenance' }
];

const specialPricing = [
  { id: 'temp-1', date: '2025-10-15', price: 300, reason: 'Événement spécial' },
  { id: 'temp-2', date: '2025-10-16', price: 300, reason: 'Événement spécial' }
];

const pricing = {
  low_season_price: 150,
  high_season_price: 250,
  grand_prix_price: 950,
  yacht_show_price: 450
};

// 3. Sauvegarder les nouvelles données
localStorage.setItem('admin-blocked-dates', JSON.stringify(blockedDates));
localStorage.setItem('admin-special-pricing', JSON.stringify(specialPricing));
localStorage.setItem('admin-pricing', JSON.stringify(pricing));

console.log('✅ Données recréées !');
console.log('📅 Dates bloquées:', blockedDates.length);
console.log('🎯 Prix spéciaux:', specialPricing.length);

// 4. Forcer le rechargement de la page
alert('✅ Données recréées ! La page va se recharger automatiquement.');
window.location.reload();
```

---

## 🎯 **VÉRIFICATION APRÈS RECHARGEMENT :**

### **1. Allez sur l'Admin :**
```
http://localhost:3001/admin
Mot de passe : palais2024
```

### **2. Vérifiez les onglets :**
- **Dates bloquées** : Devrait afficher 7 dates
- **Prix spéciaux** : Devrait afficher 2 prix
- **Prix des saisons** : Devrait afficher vos tarifs

### **3. Testez le calendrier :**
```
http://localhost:3001/reserver
```
- Les dates du 1er au 7 octobre doivent être grisées

---

## 🚨 **SI ÇA NE MARCHE TOUJOURS PAS :**

### **Script de secours (encore plus direct) :**

```javascript
// 🚨 SCRIPT DE SECOURS ULTIME
console.log('🚨 SCRIPT DE SECOURS ULTIME...');

// Vider tout
localStorage.clear();

// Recréer tout
const data = {
  'admin-blocked-dates': JSON.stringify([
    { id: '1', date: '2025-10-01', reason: 'Maintenance' },
    { id: '2', date: '2025-10-02', reason: 'Maintenance' },
    { id: '3', date: '2025-10-03', reason: 'Maintenance' },
    { id: '4', date: '2025-10-04', reason: 'Maintenance' },
    { id: '5', date: '2025-10-05', reason: 'Maintenance' }
  ]),
  'admin-special-pricing': JSON.stringify([
    { id: '1', date: '2025-10-15', price: 300, reason: 'Événement' }
  ]),
  'admin-pricing': JSON.stringify({
    low_season_price: 150,
    high_season_price: 250,
    grand_prix_price: 950,
    yacht_show_price: 450
  })
};

// Sauvegarder
Object.keys(data).forEach(key => {
  localStorage.setItem(key, data[key]);
});

console.log('✅ Tout recréé !');
alert('✅ Données recréées ! Rechargez la page manuellement (F5).');
```

---

**🎯 Essayez le premier script et dites-moi ce qui se passe !**
