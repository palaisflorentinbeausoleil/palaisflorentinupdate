import { MapPin, Clock, Car, Plane, Building, Utensils } from 'lucide-react';
import { LOCATION_HIGHLIGHTS, PROPERTY_INFO } from '@/lib/constants';

const LocationHighlights = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case "Casino de Monte-Carlo":
      case "Centre de Monaco":
        return <Building className="w-6 h-6" />;
      case "Café de Paris":
        return <Utensils className="w-6 h-6" />;
      case "Plages":
        return <MapPin className="w-6 h-6" />;
      case "Gare de Monaco":
        return <Car className="w-6 h-6" />;
      case "Aéroport Nice":
        return <Plane className="w-6 h-6" />;
      default:
        return <MapPin className="w-6 h-6" />;
    }
  };

  const highlights = LOCATION_HIGHLIGHTS.map(highlight => ({
    ...highlight,
    icon: getIcon(highlight.title)
  }));

  return (
    <section className="py-20 bg-[#F8F6F2]">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1E2A3A] mb-6">
            Un Emplacement d'Exception
          </h2>
          <p className="text-lg text-[#8B8B8B] max-w-2xl mx-auto">
            Au cœur de Beausoleil, à la frontière de Monaco, profitez d'un accès privilégié 
            aux attractions les plus prestigieuses de la Principauté.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="luxury-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  {highlight.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {highlight.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-accent">
                      {highlight.distance}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {highlight.time}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carte interactive */}
        <div className="mt-12">
          <header className="mb-5">
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Nous trouver
            </h2>
            <p className="text-foreground">
              <strong>{PROPERTY_INFO.name} – Palais Joséphine</strong><br />
              {PROPERTY_INFO.address?.full || "2 Avenue Charles de Gaulle, 06240 Beausoleil, France"}
            </p>
          </header>

          <div className="flex gap-6 items-stretch flex-wrap">
            {/* Carte */}
            <div className="flex-1 min-w-[300px] bg-background border border-border rounded-2xl shadow-lg overflow-hidden">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  title="Carte – Palais Florentin, Beausoleil (Palais Joséphine)"
                  aria-label="Emplacement du Palais Florentin à Beausoleil, 2 Avenue Charles de Gaulle"
                  src={PROPERTY_INFO.mapUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Infos + CTA */}
            <aside className="flex-1 min-w-[260px] flex flex-col justify-center gap-4">
              <p className="text-foreground text-sm">
                À deux pas de Monaco, au cœur de Beausoleil. Idéal pour rejoindre à pied le Casino, le Port Hercule et les plages.
              </p>
              <a
                href={PROPERTY_INFO.directionsUrl}
                target="_blank" 
                rel="noopener"
                className="inline-block font-medium text-center bg-primary text-primary-foreground px-6 py-3 rounded-xl transition-all duration-200 hover:bg-primary/90"
              >
                Itinéraire Google Maps
              </a>
              <div className="text-xs text-muted-foreground">
                Astuce : utilisez l'ascenseur public du Palais Joséphine pour rejoindre rapidement Monaco.
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlights;