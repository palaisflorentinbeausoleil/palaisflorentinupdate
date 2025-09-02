const ReservationSchema = () => {
  const reservationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Réservation Appartement Palais Florentin",
    "description": "Service de réservation en ligne pour l'appartement de luxe Palais Florentin avec vue mer panoramique",
    "provider": {
      "@type": "Organization",
      "name": "Palais Florentin",
      "url": "https://palais-florentin.com"
    },
    "serviceType": "Location d'appartement de vacances",
    "areaServed": {
      "@type": "Place",
      "name": "Beausoleil, Monaco, Côte d'Azur"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://palais-florentin.com/reserver",
      "serviceType": "Réservation en ligne"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tarifs et disponibilités",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Apartment",
            "name": "Appartement Palais Florentin - Vue Mer"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "EUR",
            "price": "250",
            "validFrom": "2024-01-01",
            "validThrough": "2025-12-31",
            "valueAddedTaxIncluded": true
          },
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "termsOfService": "https://palais-florentin.com/mentions-legales",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33 6 12 16 93 20",
      "email": "brem.collection@gmail.com",
      "contactType": "customer service",
      "availableLanguage": ["French", "English"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationSchema) }}
    />
  );
};

export default ReservationSchema;
