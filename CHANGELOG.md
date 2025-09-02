# Changelog - Palais Florentin

## [2024-12-19] - Mise à jour de l'adresse et ajout des métadonnées JSON-LD

### 🔄 Modifications de l'adresse
- **Ancienne adresse** : 3 Avenue Charles de Gaulle, 06240 Beausoleil, France
- **Nouvelle adresse** : 2 Avenue Charles de Gaulle, 06240 Beausoleil, France

#### Fichiers modifiés :
- `src/lib/constants.ts` - Adresse principale et URLs Google Maps
- `src/components/LocationHighlights.tsx` - Adresse affichée et aria-label
- `src/pages/Index.tsx` - Adresse dans les métadonnées structurées

### 🆕 Ajout des métadonnées JSON-LD pour les locations de vacances

#### Nouveaux composants créés :
- `src/components/VacationRentalStructuredData.tsx` - Composant spécialisé pour les métadonnées des locations de vacances
- `src/lib/vacation-rental-schema.ts` - Configuration des schémas JSON-LD

#### Schémas JSON-LD ajoutés :
1. **VacationRental** - Schéma principal pour la location de vacances
2. **Organization** - Informations sur l'organisation Palais Florentin
3. **Place** - Informations sur le lieu et ses aménités
4. **PriceSpecification** - Informations sur les prix et disponibilités
5. **Service** - Informations sur le service de location

#### Pages mises à jour avec les métadonnées :
- Page d'accueil (`/`)
- Page appartement (`/appartement`)
- Page réservation (`/reserver`)

### 📍 Coordonnées géographiques
- **Latitude** : 43.7392
- **Longitude** : 7.4272
- **URL Google Maps** : https://www.google.com/maps?q=2+Avenue+Charles+de+Gaulle,+06240+Beausoleil,+France

### 🏠 Informations de la propriété
- **Type** : Appartement 2 pièces de luxe
- **Surface** : 50m² + terrasse 20m²
- **Capacité** : 4 personnes maximum
- **Check-in** : 16h00
- **Check-out** : 11h00
- **Prix** : À partir de 150€/nuit

### 🌟 Aménités incluses
- Vue mer panoramique 180°
- Terrasse 20m² plein sud
- Climatisation réversible
- WiFi haut débit
- TV 4K 55 pouces
- Cuisine entièrement équipée
- Lave-linge et sèche-linge
- Parking privé sécurisé
- Ascenseur
- Conciergerie 24h/24
- Sécurité 24h/24

### 🔍 Optimisation SEO
- Métadonnées structurées conformes au standard Schema.org
- Support des moteurs de recherche pour les locations de vacances
- Amélioration de la visibilité dans les résultats de recherche
- Support des rich snippets Google

### 📱 Compatibilité
- Toutes les modifications sont compatibles avec le design existant
- Aucun impact sur l'interface utilisateur
- Métadonnées invisibles pour les utilisateurs mais visibles pour les moteurs de recherche
