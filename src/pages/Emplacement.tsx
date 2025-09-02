import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Clock, Car, Plane, Building, Utensils, Train, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LOCATION_HIGHLIGHTS, CONTACT_INFO, PROPERTY_INFO } from '@/lib/constants';
import StickyBookingButton from '@/components/StickyBookingButton';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Emplacement = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case "Casino de Monte-Carlo":
        return <Building className="w-8 h-8" />;
      case "Café de Paris":
        return <Utensils className="w-8 h-8" />;
      case "Plages":
        return <MapPin className="w-8 h-8" />;
      case "Gare de Monaco":
        return <Train className="w-8 h-8" />;
      case "Aéroport Nice":
        return <Plane className="w-8 h-8" />;
      case "Centre de Monaco":
        return <Building className="w-8 h-8" />;
      default:
        return <MapPin className="w-8 h-8" />;
    }
  };

  const getCategory = (title: string) => {
    switch (title) {
      case "Casino de Monte-Carlo":
        return "Casino & Divertissement";
      case "Café de Paris":
        return "Restaurant";
      case "Plages":
        return "Plages";
      case "Gare de Monaco":
        return "Transport";
      case "Aéroport Nice":
        return "Transport";
      case "Centre de Monaco":
        return "Culture";
      default:
        return "Point d'intérêt";
    }
  };

  const attractions = LOCATION_HIGHLIGHTS.map(highlight => ({
    icon: getIcon(highlight.title),
    name: highlight.title,
    distance: highlight.distance,
    walkTime: highlight.time,
    description: highlight.description,
    category: getCategory(highlight.title)
  }));

  const distances = [
    { city: "Nice", distance: "22 km", time: "25 min en voiture" },
    { city: "Cannes", distance: "45 km", time: "45 min en voiture" },
    { city: "Antibes", distance: "35 km", time: "35 min en voiture" },
    { city: "Saint-Tropez", distance: "120 km", time: "1h30 en voiture" },
    { city: "Aéroport Nice", distance: "22 km", time: "25 min en voiture" },
    { city: "Gare SNCF Nice", distance: "22 km", time: "30 min en train" }
  ];

  return (
    <>
      <SEOHead 
        title="Emplacement Palais Florentin - Vue mer et proximité Monaco | Beausoleil"
        description="Découvrez l'emplacement exceptionnel du Palais Florentin : 150m des jardins du Casino Monte-Carlo, 950m des plages, vue mer panoramique, transports, restaurants."
        canonical="https://palais-florentin.com/emplacement"
      />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="luxury-container">
            <div className="text-center">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Vue & Emplacement d'Exception
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Situé à Beausoleil, à la frontière de Monaco, profitez d'un emplacement unique 
                avec vue mer panoramique et accès privilégié aux attractions les plus 
                prestigieuses de la Principauté.
              </p>
              <div className="flex items-center justify-center space-x-2 mb-8">
                <MapPin className="w-6 h-6 text-accent" />
                <span className="text-lg font-medium text-foreground">
                  {CONTACT_INFO.address.full}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Vue Panoramique */}
        <section className="py-16">
          <div className="luxury-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Vue Mer Panoramique à 180°
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Depuis la terrasse de 20m² orientée plein sud, admirez une vue imprenable 
                  sur la mer Méditerranée, du Cap d'Ail jusqu'à l'Italie. Un spectacle 
                  grandiose qui se renouvelle à chaque instant du jour.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground">Vue directe sur Monaco et Monte-Carlo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground">Panorama sur la baie de Roquebrune</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground">Horizon dégagé jusqu'aux Alpes-Maritimes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-foreground">Couchers de soleil spectaculaires</span>
                  </div>
                </div>
              </div>
              <div className="luxury-card overflow-hidden">
                <img 
                  src="/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png"
                  alt="Terrasse avec vue mer panoramique du Palais Florentin depuis Beausoleil vers Monaco"
                  className="w-full h-full object-cover aspect-[4/3]"
                  width="800"
                  height="600"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Proches */}
        <section className="py-20 bg-secondary/30">
          <div className="luxury-container">
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Attractions à Proximité
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => (
                <div key={index} className="luxury-card p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                      {attraction.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{attraction.name}</h3>
                      </div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-accent">{attraction.distance}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{attraction.walkTime}</span>
                        </div>
                      </div>
                      <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full mb-3">
                        {attraction.category}
                      </span>
                      <p className="text-sm text-muted-foreground">{attraction.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carte Interactive */}
        <section className="py-20">
          <div className="luxury-container">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Localisation & Accès
            </h2>
            <div className="luxury-card overflow-hidden mb-12">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  title="Carte interactive - Palais Florentin, Beausoleil proche Monaco"
                  aria-label="Emplacement du Palais Florentin à Beausoleil, proche de Monaco"
                  src={PROPERTY_INFO.mapUrl}
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="p-6 bg-background border-t border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {PROPERTY_INFO.address.building}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {CONTACT_INFO.address.full}
                    </p>
                  </div>
                  <a
                    href={PROPERTY_INFO.directionsUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-luxury inline-flex items-center gap-2"
                  >
                    <Car className="w-4 h-4" />
                    Itinéraire
                  </a>
                </div>
              </div>
            </div>

            {/* Distances */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distances.map((item, index) => (
                <div key={index} className="luxury-card p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">{item.city}</h3>
                  <div className="text-2xl font-bold text-accent mb-1">{item.distance}</div>
                  <p className="text-sm text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 ocean-gradient relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-azure-blue/90" />
          <div className="luxury-container relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Réservez Votre Séjour de Prestige
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Profitez de cet emplacement unique pour découvrir le meilleur de la Côte d'Azur 
              et de la Principauté de Monaco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reserver">
                <Button className="bg-champagne-gold hover:bg-champagne-gold/90 text-primary px-8 py-4 text-lg">
                  Réserver Maintenant
                </Button>
              </Link>
              <Link to="/appartement">
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 text-lg">
                  Découvrir l'Appartement
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBookingButton />
      <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Emplacement;