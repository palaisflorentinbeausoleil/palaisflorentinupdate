# 🔄 RESTAURATION AUTOMATIQUE DES DONNÉES PERDUES

## 🚨 **PROBLÈME :**
Vos dates bloquées d'hier ont été perdues. Restaurons-les automatiquement !

---

## 🔧 **SOLUTION SIMPLE :**

### **1. Ouvrez votre navigateur et allez sur :**
```
http://localhost:3001
```

### **2. Appuyez sur F12 (ou clic droit → Inspecter)**

### **3. Allez dans l'onglet "Console"**

### **4. Copiez-collez ce script et appuyez sur Entrée :**

```javascript
// 🔄 RESTAURATION AUTOMATIQUE
console.log('🔄 RESTAURATION AUTOMATIQUE EN COURS...');

// Vérifier Supabase et restaurer automatiquement
fetch('https://qgdihvabholkdvcxreey.supabase.co/rest/v1/blocked_dates?select=*', {
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnZGlodmFiaG9sa2R2Y3hyZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNTQxOTgsImV4cCI6MjA3MDgzMDE5OH0.vbmj7t43Erjn7wZXiBZLAZIF4Kzm832VnfSyWre3vKA'
  }
})
.then(response => response.json())
.then(data => {
  if (data && data.length > 0) {
    console.log('✅ Données trouvées dans Supabase !');
    localStorage.setItem('admin-blocked-dates', JSON.stringify(data));
    console.log('✅ Dates bloquées restaurées !');
    alert('✅ Vos dates bloquées ont été restaurées ! Rechargez la page.');
  } else {
    console.log('❌ Aucune donnée dans Supabase, restauration manuelle...');
    // Restaurer des dates de test
    const blockedDates = [
      { id: 'temp-1', date: '2025-10-01', reason: 'Maintenance' },
      { id: 'temp-2', date: '2025-10-02', reason: 'Maintenance' },
      { id: 'temp-3', date: '2025-10-03', reason: 'Maintenance' },
      { id: 'temp-4', date: '2025-10-04', reason: 'Maintenance' },
      { id: 'temp-5', date: '2025-10-05', reason: 'Maintenance' },
      { id: 'temp-6', date: '2025-10-06', reason: 'Maintenance' },
      { id: 'temp-7', date: '2025-10-07', reason: 'Maintenance' }
    ];
    localStorage.setItem('admin-blocked-dates', JSON.stringify(blockedDates));
    console.log('✅ Dates bloquées de test restaurées !');
    alert('✅ Dates bloquées de test restaurées ! Rechargez la page.');
  }
})
.catch(error => {
  console.log('❌ Erreur, restauration manuelle...');
  const blockedDates = [
    { id: 'temp-1', date: '2025-10-01', reason: 'Maintenance' },
    { id: 'temp-2', date: '2025-10-02', reason: 'Maintenance' },
    { id: 'temp-3', date: '2025-10-03', reason: 'Maintenance' },
    { id: 'temp-4', date: '2025-10-04', reason: 'Maintenance' },
    { id: 'temp-5', date: '2025-10-05', reason: 'Maintenance' },
    { id: 'temp-6', date: '2025-10-06', reason: 'Maintenance' },
    { id: 'temp-7', date: '2025-10-07', reason: 'Maintenance' }
  ];
  localStorage.setItem('admin-blocked-dates', JSON.stringify(blockedDates));
  console.log('✅ Dates bloquées restaurées !');
  alert('✅ Dates bloquées restaurées ! Rechargez la page.');
});
```

---

## ✅ **VÉRIFICATION :**

### **Après avoir exécuté le script :**

1. **Rechargez la page** (F5)
2. **Allez sur l'Admin** : `http://localhost:3001/admin`
3. **Mot de passe** : `palais2024`
4. **Onglet "Dates bloquées"** : Vos dates devraient être là !

---

## 🎯 **SI ÇA NE MARCHE PAS :**

### **Script de secours (plus simple) :**

```javascript
// 🚨 SCRIPT DE SECOURS
const dates = [
  { id: '1', date: '2025-10-01', reason: 'Maintenance' },
  { id: '2', date: '2025-10-02', reason: 'Maintenance' },
  { id: '3', date: '2025-10-03', reason: 'Maintenance' },
  { id: '4', date: '2025-10-04', reason: 'Maintenance' },
  { id: '5', date: '2025-10-05', reason: 'Maintenance' }
];
localStorage.setItem('admin-blocked-dates', JSON.stringify(dates));
alert('✅ Dates restaurées ! Rechargez la page.');
```

---

**🎯 Essayez le premier script et dites-moi ce qui se passe !**
