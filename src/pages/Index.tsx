import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LodgifyWidget from '@/components/LodgifyWidget';
import ApartmentPreview from '@/components/ApartmentPreview';
import LocationHighlights from '@/components/LocationHighlights';
import ServicesSection from '@/components/ServicesSection';
import ReviewsSection from '@/components/ReviewsSection';
import BookingCTA from '@/components/BookingCTA';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import VacationRentalStructuredData from '@/components/VacationRentalStructuredData';
import ReviewsSchema from '@/components/ReviewsSchema';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyBookingButton from '@/components/StickyBookingButton';

const Index = () => {
  const seoData = {
    title: "Palais Florentin - Appartement de Prestige Vue Mer | Location Beausoleil Monaco",
    description: "Appartement 2 pièces de luxe avec vue mer panoramique, terrasse 20m², à 150m du Casino Monte-Carlo. Location courte durée haut de gamme à Beausoleil, Monaco. Réservez votre séjour de prestige.",
    keywords: "appartement monaco, location beausoleil, vue mer, casino monte carlo, terrasse, prestige, luxe, location courte durée, riviera française, côte d'azur, appartement vue mer monaco, location beausoleil monaco",
    canonical: "https://palais-florentin.com/",
    ogImage: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    type: "website" as const,
    tags: ["appartement", "monaco", "beausoleil", "vue mer", "luxe", "location courte durée", "riviera française"]
  };

  const structuredData = {
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
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://palais-florentin.com"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead {...seoData} structuredData={structuredData} />
      <StructuredData type="breadcrumb" data={{ currentPage: "Accueil", path: "/" }} />
      <VacationRentalStructuredData />
      <ReviewsSchema />
      
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        
                    {/* Widget Lodgify pour la réservation */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-display font-bold text-[hsl(210_35%_17%)] mb-4">
                    Réservez votre séjour de prestige
                  </h2>
                  <p className="text-xl text-[hsl(0_0%_55%)] max-w-2xl mx-auto">
                    Vérifiez la disponibilité et réservez directement en ligne avec notre partenaire Lodgify
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <LodgifyWidget />
                </div>
              </div>
            </section>
        
        <section aria-labelledby="apartment-heading">
          <ApartmentPreview />
        </section>
        
        <section aria-labelledby="location-heading">
          <LocationHighlights />
        </section>
        
        <section aria-labelledby="services-heading">
          <ServicesSection />
        </section>
        
        <section aria-labelledby="reviews-heading">
          <ReviewsSection />
        </section>
        
        <section aria-labelledby="booking-heading">
          <BookingCTA />
        </section>
      </main>
      
      <Footer />
      <FloatingWhatsApp />
      <StickyBookingButton />
    </>
  );
};

export default Index;
