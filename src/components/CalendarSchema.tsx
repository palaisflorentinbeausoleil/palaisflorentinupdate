const CalendarSchema = () => {
  const calendarSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calendrier de Disponibilités Palais Florentin",
    "description": "Application web pour consulter les disponibilités et tarifs de l'appartement Palais Florentin",
    "url": "https://palais-florentin.com/calendrier",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Gratuit - Consultation des disponibilités"
    },
    "featureList": [
      "Consultation des disponibilités en temps réel",
      "Affichage des tarifs par nuit",
      "Navigation mois par mois",
      "Indicateurs de disponibilité",
      "Prix dynamiques selon la saison"
    ],
    "screenshot": [
      "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png"
    ],
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "Palais Florentin",
      "url": "https://palais-florentin.com"
    },
    "mainEntity": {
      "@type": "Apartment",
      "name": "Appartement Palais Florentin",
      "description": "Appartement de luxe avec vue mer panoramique",
      "url": "https://palais-florentin.com/appartement"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(calendarSchema) }}
    />
  );
};

export default CalendarSchema;
