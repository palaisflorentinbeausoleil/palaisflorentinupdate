import { VACATION_RENTAL_SCHEMA, VACATION_RENTAL_ADDITIONAL_SCHEMAS } from '@/lib/vacation-rental-schema';

const VacationRentalStructuredData = () => {
  return (
    <>
      {/* Schéma principal pour la location de vacances */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VACATION_RENTAL_SCHEMA) }}
      />
      
      {/* Schémas additionnels */}
      {VACATION_RENTAL_ADDITIONAL_SCHEMAS.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      {/* Schéma pour l'organisation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Palais Florentin",
            alternateName: "Palais Joséphine",
            description: "Résidence de standing proposant des appartements de luxe en location courte durée avec vue mer panoramique",
            url: "https://palais-florentin.com",
            logo: "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2 Avenue Charles de Gaulle",
              addressLocality: "06240 Beausoleil",
              postalCode: "06240",
              addressCountry: "France"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.7392,
              longitude: 7.4272
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33 6 12 16 93 20",
              email: "brem.collection@gmail.com",
              contactType: "customer service",
              availableLanguage: ["French", "English"]
            },
            sameAs: [
              "https://www.google.com/maps?q=2+Avenue+Charles+de+Gaulle,+06240+Beausoleil,+France"
            ]
          })
        }}
      />
      
      {/* Schéma pour le lieu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Palais Florentin - Palais Joséphine",
            description: "Résidence de standing située à 150m du Casino de Monte-Carlo avec vue mer panoramique",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2 Avenue Charles de Gaulle",
              addressLocality: "06240 Beausoleil",
              postalCode: "06240",
              addressCountry: "France"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 43.7392,
              longitude: 7.4272
            },
            image: [
              "https://palais-florentin.com/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
              "https://palais-florentin.com/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png"
            ],
            publicAccess: true,
            amenityFeature: [
              {
                "@type": "LocationFeatureSpecification",
                name: "Vue mer panoramique"
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Proximité Casino Monte-Carlo"
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Accès plages"
              },
              {
                "@type": "LocationFeatureSpecification",
                name: "Transport en commun"
              }
            ]
          })
        }}
      />
    </>
  );
};

export default VacationRentalStructuredData;
