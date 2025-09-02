import { CONTACT_INFO } from './constants';

export const VACATION_RENTAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "Appartement Palais Florentin - Vue Mer Panoramique",
  alternateName: "Palais Florentin",
  description: "Appartement 2 pièces de luxe de 50m² avec terrasse 20m² plein sud, vue mer panoramique 180°, entièrement rénové avec matériaux haut de gamme. Location courte durée haut de gamme à 150m du Casino de Monte-Carlo.",
  url: "https://palais-florentin.com",
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  floorSize: {
    "@type": "QuantitativeValue",
    value: 50,
    unitCode: "MTK"
  },
  numberOfRooms: 2,
  numberOfBathroomsTotal: 1,
  numberOfBedrooms: 1,
  maximumNumberOfGuests: 4,
  // Nouvelles propriétés avancées
  petsAllowed: false,
  smokingAllowed: false,
  checkinTime: "16:00",
  checkoutTime: "11:00",
  // Propriétés de sécurité et accessibilité
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Vue mer panoramique 180°"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Terrasse 20m² plein sud"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Climatisation réversible"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "WiFi haut débit"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "TV 4K 55 pouces"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Cuisine entièrement équipée"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Lave-linge et sèche-linge"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Parking privé sécurisé"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Ascenseur"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Conciergerie 24h/24"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Sécurité 24h/24"
    },
    // Nouvelles propriétés
    {
      "@type": "LocationFeatureSpecification",
      name: "Vue panoramique"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Terrasse privée"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Proximité Casino Monte-Carlo"
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Accès plages"
    }
  ],
  image: [
    "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    "https://palais-florentin.com/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
    "https://palais-florentin.com/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png",
    "https://palais-florentin.com/lovable-uploads/f193ee2f-20e6-458e-ae60-5426571ab4e3.png",
    "https://palais-florentin.com/lovable-uploads/ae2e7277-2e48-45ab-b91f-2bec37932574.png"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    postalCode: "06240",
    addressCountry: CONTACT_INFO.address.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7392,
    longitude: 7.4272
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
    price: "250",
    validFrom: "2024-01-01",
    validThrough: "2025-12-31",
    priceValidUntil: "2025-12-31",
    businessFunction: "https://schema.org/LeaseOut",
    // Nouvelles propriétés d'offre
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "250",
      priceCurrency: "EUR",
      minPrice: "150",
      maxPrice: "950",
      validFrom: "2024-01-01",
      validThrough: "2025-12-31"
    }
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 127,
    bestRating: 5,
    worstRating: 1
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sophie Laurent"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      reviewBody: "Vue imprenable sur la mer depuis la terrasse. L'appartement est parfaitement équipé et très bien décoré. Emplacement idéal pour visiter Monaco.",
      datePublished: "2024-03-10"
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Pierre Durand"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5
      },
      reviewBody: "Excellent séjour dans cet appartement de luxe. La terrasse est magnifique pour les repas en extérieur. Très calme malgré la proximité du Casino.",
      datePublished: "2024-02-28"
    }
  ],
  // Nouvelles propriétés de localisation
  areaServed: {
    "@type": "Country",
    name: "France"
  },
  serviceType: "Location de vacances",
  category: "Appartement de luxe",
  // Horaires et disponibilité
  openingHours: "Mo-Su 00:00-23:59",
  // Informations sur la propriété
  propertyType: "Appartement",
  buildingType: "Résidence de standing",
  yearBuilt: 2020,
  // Services inclus
  hasMap: "https://www.google.com/maps?q=2+Avenue+Charles+de+Gaulle,+06240+Beausoleil,+France",
  // Informations sur l'hôte
  host: {
    "@type": "Organization",
    name: "Palais Florentin",
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone
  },
  // Nouvelles propriétés pour le SEO local
  containedInPlace: {
    "@type": "Place",
    name: "Beausoleil",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beausoleil",
      addressRegion: "Alpes-Maritimes",
      addressCountry: "FR"
    }
  },
  // Propriétés pour les moteurs de recherche
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://palais-florentin.com/appartement"
  }
};

export const VACATION_RENTAL_ADDITIONAL_SCHEMAS = [
  // Schéma pour les prix et disponibilités
  {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    priceCurrency: "EUR",
    minPrice: "150",
    maxPrice: "950",
    validFrom: "2024-01-01",
    validThrough: "2025-12-31",
    valueAddedTaxIncluded: true,
    eligibleRegion: {
      "@type": "Country",
      name: "France"
    }
  },
  // Schéma pour les services
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location d'appartement de luxe",
    description: "Location courte durée d'appartement haut de gamme avec vue mer panoramique",
    provider: {
      "@type": "Organization",
      name: "Palais Florentin",
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address.street,
        addressLocality: CONTACT_INFO.address.city,
        postalCode: "06240",
        addressCountry: CONTACT_INFO.address.country
      }
    },
    areaServed: {
      "@type": "Country",
      name: "France"
    },
    serviceType: "Location de vacances"
  }
];
