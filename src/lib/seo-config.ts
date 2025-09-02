export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage: string;
  type: 'website' | 'article' | 'product';
  tags: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export const SEO_CONFIG: Record<string, SEOConfig> = {
  home: {
    title: "Palais Florentin - Appartement de Prestige Vue Mer | Location Beausoleil Monaco",
    description: "Appartement 2 pièces de luxe avec vue mer panoramique, terrasse 20m², à 150m du Casino Monte-Carlo. Location courte durée haut de gamme à Beausoleil, Monaco. Réservez votre séjour de prestige.",
    keywords: "appartement monaco, location beausoleil, vue mer, casino monte carlo, terrasse, prestige, luxe, location courte durée, riviera française, côte d'azur, appartement vue mer monaco, location beausoleil monaco",
    canonical: "https://palais-florentin.com/",
    ogImage: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    type: "website",
    tags: ["appartement", "monaco", "beausoleil", "vue mer", "luxe", "location courte durée", "riviera française"]
  },
  
  apartment: {
    title: "Appartement Palais Florentin - Vue Mer Panoramique | Location Beausoleil Monaco",
    description: "Découvrez notre appartement 2 pièces de luxe de 50m² avec terrasse 20m² plein sud, vue mer panoramique 180°, entièrement rénové avec matériaux haut de gamme. Location courte durée à 150m du Casino Monte-Carlo.",
    keywords: "appartement vue mer monaco, location beausoleil, terrasse 20m², vue panoramique, appartement luxe monaco, location courte durée beausoleil, casino monte carlo, riviera française",
    canonical: "https://palais-florentin.com/appartement",
    ogImage: "/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
    type: "product",
    tags: ["appartement", "vue mer", "terrasse", "luxe", "monaco", "beausoleil", "location courte durée"]
  },
  
  location: {
    title: "Emplacement Palais Florentin - 150m du Casino Monte-Carlo | Beausoleil Monaco",
    description: "Emplacement privilégié à 150m du Casino de Monte-Carlo, au cœur de la Riviera française. Découvrez les attractions, restaurants et activités à proximité de notre appartement de luxe.",
    keywords: "emplacement palais florentin, casino monte carlo, beausoleil monaco, riviera française, côte d'azur, location monaco, attractions monaco, restaurants monaco",
    canonical: "https://palais-florentin.com/emplacement",
    ogImage: "/lovable-uploads/f193ee2f-20e6-458e-ae60-5426571ab4e3.png",
    type: "website",
    tags: ["emplacement", "monaco", "casino", "beausoleil", "riviera", "attractions"]
  },
  
  booking: {
    title: "Réserver l'Appartement Palais Florentin | Location Beausoleil Monaco",
    description: "Réservez votre séjour dans notre appartement de luxe avec vue mer panoramique. Calendrier en ligne, réservation sécurisée, prix transparents. Location courte durée à 150m du Casino Monte-Carlo.",
    keywords: "réserver appartement monaco, location beausoleil, réservation en ligne, appartement vue mer, location courte durée monaco, réserver palais florentin",
    canonical: "https://palais-florentin.com/reserver",
    ogImage: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    type: "website",
    tags: ["réservation", "appartement", "monaco", "beausoleil", "location courte durée"]
  },
  
  services: {
    title: "Services & Équipements Palais Florentin | Appartement Luxe Monaco",
    description: "Découvrez tous nos services et équipements haut de gamme : climatisation, WiFi, parking sécurisé, terrasse privative, vue mer panoramique. Confort exceptionnel à Monaco.",
    keywords: "services palais florentin, équipements appartement monaco, climatisation wifi parking, terrasse privative, vue mer, confort luxe monaco",
    canonical: "https://palais-florentin.com/services",
    ogImage: "/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png",
    type: "website",
    tags: ["services", "équipements", "confort", "luxe", "monaco"]
  },
  
  contact: {
    title: "Contact Palais Florentin | Appartement Vue Mer Monaco",
    description: "Contactez-nous pour réserver votre séjour au Palais Florentin. Appartement de luxe avec vue mer à 150m du Casino Monte-Carlo. Téléphone, email, WhatsApp disponibles.",
    keywords: "contact palais florentin, réserver appartement monaco, téléphone email whatsapp, location beausoleil, appartement vue mer",
    canonical: "https://palais-florentin.com/contact",
    ogImage: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    type: "website",
    tags: ["contact", "réservation", "monaco", "appartement"]
  },
  
  legal: {
    title: "Mentions Légales - Palais Florentin | Location Appartement Monaco",
    description: "Mentions légales du Palais Florentin, location d'appartement de luxe à Beausoleil, Monaco. Informations légales et réglementaires.",
    keywords: "mentions légales palais florentin, location appartement monaco, informations légales, beausoleil",
    canonical: "https://palais-florentin.com/mentions-legales",
    ogImage: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    type: "website",
    tags: ["mentions légales", "informations légales"],
    noindex: true
  },
  
  privacy: {
    title: "Politique de Confidentialité - Palais Florentin | Protection Données",
    description: "Politique de confidentialité du Palais Florentin. Protection de vos données personnelles lors de la réservation de notre appartement de luxe à Monaco.",
    keywords: "politique confidentialité palais florentin, protection données personnelles, rgpd, location monaco",
    canonical: "https://palais-florentin.com/politique-confidentialite",
    ogImage: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    type: "website",
    tags: ["politique confidentialité", "protection données", "rgpd"],
    noindex: true
  }
};

// Configuration des données structurées par page
export const STRUCTURED_DATA_CONFIG = {
  home: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Palais Florentin - Appartement de Prestige Vue Mer",
    "description": "Appartement 2 pièces de luxe avec vue mer panoramique, terrasse 20m², à 150m du Casino Monte-Carlo. Location courte durée haut de gamme à Beausoleil, Monaco.",
    "url": "https://palais-florentin.com/",
    "mainEntity": {
      "@type": "Apartment",
      "name": "Appartement Palais Florentin - Vue Mer Panoramique",
      "description": "Appartement 2 pièces de luxe de 50m² avec terrasse 20m² plein sud, vue mer panoramique, entièrement rénové avec matériaux haut de gamme.",
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": 50,
        "unitCode": "MTK"
      },
      "numberOfRooms": 2,
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Vue mer panoramique 180°"},
        {"@type": "LocationFeatureSpecification", "name": "Terrasse 20m² plein sud"},
        {"@type": "LocationFeatureSpecification", "name": "Climatisation réversible"},
        {"@type": "LocationFeatureSpecification", "name": "WiFi haut débit"},
        {"@type": "LocationFeatureSpecification", "name": "TV 4K 55 pouces"},
        {"@type": "LocationFeatureSpecification", "name": "Cuisine entièrement équipée"}
      ],
      "image": [
        "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
        "https://palais-florentin.com/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
        "https://palais-florentin.com/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Avenue Charles de Gaulle",
        "addressLocality": "06240 Beausoleil",
        "postalCode": "06240",
        "addressCountry": "France"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.7392,
        "longitude": 7.4272
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "price": "250",
        "validFrom": "2024-01-01",
        "validThrough": "2025-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.9,
        "reviewCount": 127,
        "bestRating": 5,
        "worstRating": 1
      }
    }
  },
  
  apartment: {
    "@context": "https://schema.org",
    "@type": "Apartment",
    "name": "Appartement Palais Florentin - Vue Mer Panoramique",
    "description": "Appartement 2 pièces de luxe de 50m² avec terrasse 20m² plein sud, vue mer panoramique, entièrement rénové avec matériaux haut de gamme.",
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 50,
      "unitCode": "MTK"
    },
    "numberOfRooms": 2,
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Vue mer panoramique 180°"},
      {"@type": "LocationFeatureSpecification", "name": "Terrasse 20m² plein sud"},
      {"@type": "LocationFeatureSpecification", "name": "Climatisation réversible"},
      {"@type": "LocationFeatureSpecification", "name": "WiFi haut débit"},
      {"@type": "LocationFeatureSpecification", "name": "TV 4K 55 pouces"},
      {"@type": "LocationFeatureSpecification", "name": "Cuisine entièrement équipée"}
    ],
    "image": [
      "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
      "https://palais-florentin.com/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
      "https://palais-florentin.com/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 Avenue Charles de Gaulle",
      "addressLocality": "06240 Beausoleil",
      "postalCode": "06240",
      "addressCountry": "France"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7392,
      "longitude": 7.4272
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "price": "250",
      "validFrom": "2024-01-01",
      "validThrough": "2025-12-31"
    }
  }
};

// Fonction utilitaire pour obtenir la configuration SEO par route
export const getSEOConfig = (route: string): SEOConfig => {
  const routeMap: Record<string, keyof typeof SEO_CONFIG> = {
    '/': 'home',
    '/appartement': 'apartment',
    '/emplacement': 'location',
    '/reserver': 'booking',
    '/services': 'services',
    '/contact': 'contact',
    '/mentions-legales': 'legal',
    '/politique-confidentialite': 'privacy'
  };
  
  const configKey = routeMap[route] || 'home';
  return SEO_CONFIG[configKey];
};

// Fonction utilitaire pour obtenir les données structurées par route
export const getStructuredData = (route: string) => {
  const dataMap: Record<string, Record<string, unknown>> = {
    '/': STRUCTURED_DATA_CONFIG.home,
    '/appartement': STRUCTURED_DATA_CONFIG.apartment
  };
  
  return dataMap[route] || null;
};

