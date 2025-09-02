import { CONTACT_INFO } from '@/lib/constants';

interface StructuredDataProps {
  type: 'hotel' | 'faq' | 'apartment' | 'local_business' | 'breadcrumb' | 'review' | 'price_range' | 'vacation_rental';
  data?: Record<string, unknown>;
}

interface HotelStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  url: string;
  telephone: string;
  email: string;
  priceRange: string;
  amenityFeature: Array<{
    "@type": string;
    name: string;
  }>;
  image: string[];
  aggregateRating?: {
    "@type": string;
    ratingValue: number;
    reviewCount: number;
  };
  offers?: {
    "@type": string;
    availability: string;
    priceCurrency: string;
    price: string;
    validFrom: string;
    validThrough: string;
  };
  review?: Array<{
    "@type": string;
    author: {
      "@type": string;
      name: string;
    };
    reviewRating: {
      "@type": string;
      ratingValue: number;
      bestRating: number;
    };
    reviewBody: string;
    datePublished: string;
  }>;
}

interface FAQStructuredData {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }>;
}

interface ApartmentStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  floorSize: {
    "@type": string;
    value: number;
    unitCode: string;
  };
  numberOfRooms: number;
  amenityFeature: Array<{
    "@type": string;
    name: string;
  }>;
  image: string[];
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  offers: {
    "@type": string;
    availability: string;
    priceCurrency: string;
    price: string;
    validFrom: string;
    validThrough: string;
    priceValidUntil: string;
  };
  aggregateRating?: {
    "@type": string;
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  review?: Array<{
    "@type": string;
    author: {
      "@type": string;
      name: string;
    };
    reviewRating: {
      "@type": string;
      ratingValue: number;
      bestRating: number;
    };
    reviewBody: string;
    datePublished: string;
  }>;
}

interface BreadcrumbStructuredData {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

interface VacationRentalStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  floorSize: {
    "@type": string;
    value: number;
    unitCode: string;
  };
  numberOfRooms: number;
  numberOfBathroomsTotal: number;
  numberOfBedrooms: number;
  amenityFeature: Array<{
    "@type": string;
    name: string;
  }>;
  image: string[];
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  offers: {
    "@type": string;
    availability: string;
    priceCurrency: string;
    price: string;
    validFrom: string;
    validThrough: string;
    priceValidUntil: string;
    businessFunction: string;
  };
  aggregateRating?: {
    "@type": string;
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  review?: Array<{
    "@type": string;
    author: {
      "@type": string;
      name: string;
    };
    reviewRating: {
      "@type": string;
      ratingValue: number;
      bestRating: number;
    };
    reviewBody: string;
    datePublished: string;
  }>;
  checkinTime: string;
  checkoutTime: string;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  maximumNumberOfGuests: number;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  if (type === 'hotel') {
    const hotelData: HotelStructuredData = {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: "Palais Florentin",
      description: "Appartement de prestige avec vue mer panoramique au cœur de la Riviera. Location courte durée haut de gamme à proximité du Casino de Monte-Carlo.",
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
      url: "https://palais-florentin.com",
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      priceRange: "€€€",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Vue mer panoramique"
        },
        {
          "@type": "LocationFeatureSpecification", 
          name: "Terrasse 20m²"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Climatisation"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "WiFi haut débit"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking sécurisé"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "TV 4K 55 pouces"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Cuisine entièrement équipée"
        }
      ],
      image: [
        "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
        "https://palais-florentin.com/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
        "https://palais-florentin.com/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png"
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 127
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "EUR",
        price: "250",
        validFrom: "2024-01-01",
        validThrough: "2025-12-31"
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Marie Dubois"
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5
          },
          reviewBody: "Appartement exceptionnel avec une vue magnifique sur la mer. La terrasse est parfaite pour les petits déjeuners. Très bien situé près du Casino.",
          datePublished: "2024-01-15"
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Jean-Pierre Martin"
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5
          },
          reviewBody: "Séjour parfait dans cet appartement de luxe. Tout est impeccable, la décoration est soignée et l'emplacement est idéal.",
          datePublished: "2024-02-20"
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelData) }}
      />
    );
  }

  if (type === 'faq') {
    const faqData: FAQStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quels sont les horaires de check-in et check-out ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le check-in se fait à partir de 16h00 et le check-out jusqu'à 11h00. Des arrangements peuvent être possibles sur demande selon disponibilité."
          }
        },
        {
          "@type": "Question",
          name: "L'appartement est-il climatisé ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, l'appartement dispose d'une climatisation réversible dans toutes les pièces pour votre confort toute l'année."
          }
        },
        {
          "@type": "Question",
          name: "Y a-t-il un parking disponible ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un parking privé sécurisé est disponible en option. Contactez-nous pour réserver votre place de parking couverte."
          }
        },
        {
          "@type": "Question",
          name: "L'appartement est-il adapté aux enfants ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'appartement est parfaitement adapté aux familles avec enfants. La terrasse est sécurisée et l'appartement est situé dans une résidence sécurisée."
          }
        },
        {
          "@type": "Question",
          name: "Quels sont les moyens de paiement acceptés ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nous acceptons les cartes bancaires (Visa, Mastercard), les virements bancaires et les paiements en espèces à l'arrivée."
          }
        },
        {
          "@type": "Question",
          name: "Y a-t-il des commerces à proximité ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, de nombreux commerces, restaurants et pharmacies sont accessibles à pied dans un rayon de 500m. Le Casino de Monte-Carlo est à 150m."
          }
        },
        {
          "@type": "Question",
          name: "Quelle est la capacité d'accueil de l'appartement ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'appartement peut accueillir jusqu'à 4 personnes confortablement avec 1 lit double et 1 canapé-lit convertible."
          }
        },
        {
          "@type": "Question",
          name: "L'appartement est-il accessible aux personnes à mobilité réduite ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "L'appartement est situé au 3ème étage avec ascenseur. Contactez-nous pour discuter de vos besoins spécifiques."
          }
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    );
  }

  if (type === 'apartment') {
    const apartmentData: ApartmentStructuredData = {
      "@context": "https://schema.org",
      "@type": "Apartment",
      name: "Appartement Palais Florentin - Vue Mer Panoramique",
      description: "Appartement 2 pièces de luxe de 50m² avec terrasse 20m² plein sud, vue mer panoramique, entièrement rénové avec matériaux haut de gamme.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 50,
        unitCode: "MTK"
      },
      numberOfRooms: 2,
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
        }
      ],
      image: [
        "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
        "https://palais-florentin.com/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
        "https://palais-florentin.com/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png",
        "https://palais-florentin.com/lovable-uploads/f193ee2f-20e6-458e-ae60-5426571ab4e3.png"
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
        priceValidUntil: "2025-12-31"
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
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(apartmentData) }}
      />
    );
  }

  if (type === 'breadcrumb') {
    const breadcrumbData: BreadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://palais-florentin.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data?.currentPage || "Page actuelle",
          item: `https://palais-florentin.com${data?.path || ""}`
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    );
  }

  if (type === 'review') {
    const reviewData = {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "Apartment",
        name: "Appartement Palais Florentin"
      },
      author: {
        "@type": "Person",
        name: data?.author || "Client satisfait"
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: data?.rating || 5,
        bestRating: 5
      },
      reviewBody: data?.review || "Excellent séjour dans cet appartement de luxe avec vue mer panoramique.",
      datePublished: data?.date || new Date().toISOString().split('T')[0]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewData) }}
      />
    );
  }

  if (type === 'vacation_rental') {
    const vacationRentalData: VacationRentalStructuredData = {
      "@context": "https://schema.org",
      "@type": "VacationRental",
      name: "Appartement Palais Florentin - Vue Mer Panoramique",
      description: "Appartement 2 pièces de luxe de 50m² avec terrasse 20m² plein sud, vue mer panoramique 180°, entièrement rénové avec matériaux haut de gamme. Location courte durée haut de gamme à 150m du Casino de Monte-Carlo.",
      floorSize: {
        "@type": "QuantitativeValue",
        value: 50,
        unitCode: "MTK"
      },
      numberOfRooms: 2,
      numberOfBathroomsTotal: 1,
      numberOfBedrooms: 1,
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
        businessFunction: "https://schema.org/LeaseOut"
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
      checkinTime: "16:00",
      checkoutTime: "11:00",
      petsAllowed: false,
      smokingAllowed: false,
      maximumNumberOfGuests: 4
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRentalData) }}
      />
    );
  }

  if (type === 'price_range') {
    const priceRangeData = {
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
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceRangeData) }}
      />
    );
  }

  return null;
};

export default StructuredData;