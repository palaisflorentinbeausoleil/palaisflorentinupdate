# 🧪 TEST RAPIDE - VÉRIFICATION DU SYSTÈME

## 🚀 **ÉTAPES DE TEST :**

### **1. Test de Réservation :**
```
1. Ouvrez : http://localhost:3000/reserver
2. Sélectionnez des dates (ex: 15/10/2025 - 20/10/2025)
3. Remplissez le formulaire :
   - Nom : "Test User"
   - Email : "test@example.com"
   - Téléphone : "0123456789"
   - Voyageurs : 2
4. Cliquez sur "Réserver maintenant"
5. Vérifiez le message de confirmation
```

### **2. Test de Validation :**
```
1. Testez avec des champs vides
2. Testez avec un email invalide (sans @)
3. Testez sans numéro de téléphone
4. Vérifiez que les messages d'erreur s'affichent
```

### **3. Test de l'Admin :**
```
1. Ouvrez : http://localhost:3000/admin
2. Mot de passe : palais2024
3. Vérifiez les onglets :
   - Prix des saisons
   - Prix spéciaux
   - Dates bloquées
   - Réservations
```

---

## 🔍 **VÉRIFICATION DES LOGS :**

### **Console (F12) :**
```
✅ Réservation créée avec succès en base de données
✅ Réservation sauvegardée localement
⚠️ Échec de l'email (fonction Edge non configurée)
```

### **localStorage :**
```javascript
// Dans la console (F12)
localStorage.getItem('local-bookings')
localStorage.getItem('admin-pricing')
```

---

## ✅ **RÉSULTATS ATTENDUS :**

- ✅ **Formulaire** : Validation complète
- ✅ **Réservation** : Fonctionne avec fallback
- ✅ **Admin** : Interface opérationnelle
- ✅ **Logs** : Messages informatifs

---

**🎯 Testez maintenant et dites-moi ce qui fonctionne ou ne fonctionne pas !**
