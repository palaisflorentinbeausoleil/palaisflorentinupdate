import { Bed, Bath, Wind, Wifi, Car, Shield, ChefHat, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ApartmentPreview = () => {
  const amenities = [
    { icon: <Wind className="w-5 h-5" />, name: "Climatisation" },
    { icon: <Wifi className="w-5 h-5" />, name: "WiFi Haut Débit" },
    { icon: <ChefHat className="w-5 h-5" />, name: "Cuisine Équipée" },
    { icon: <Tv className="w-5 h-5" />, name: "TV 4K" },
    { icon: <Car className="w-5 h-5" />, name: "Parking en Option" },
    { icon: <Shield className="w-5 h-5" />, name: "Sécurisé 24h/24" },
  ];

  const stats = [
    { number: "50", unit: "m²", label: "Surface habitable" },
    { number: "20", unit: "m²", label: "Terrasse plein sud" },
    { number: "2", unit: "", label: "Pièces rénovées" },
    { number: "2", unit: "", label: "Personnes max" },
  ];

  return (
    <section className="py-20 bg-[#F8F6F2]">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1E2A3A] mb-6">
              Un Appartement d'Exception
            </h2>
            <p className="text-lg text-[#8B8B8B] mb-8 leading-relaxed">
              Entièrement rénové avec des matériaux haut de gamme, cet appartement de 2 pièces 
              offre tout le confort moderne dans un cadre élégant. La terrasse de 20m² orientée 
              plein sud vous permet de profiter pleinement du climat méditerranéen avec une vue 
              imprenable sur la mer.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-baseline justify-center lg:justify-start mb-2">
                    <span className="text-3xl font-bold text-accent">{stat.number}</span>
                    <span className="text-lg font-medium text-accent ml-1">{stat.unit}</span>
                  </div>
                  <p className="text-sm text-[#8B8B8B]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="font-semibold text-[#1E2A3A] mb-4">Équipements & Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {amenity.icon}
                    </div>
                    <span className="text-sm font-medium text-[#1E2A3A]">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/appartement">
              <Button className="btn-luxury">
                Voir Tous les Détails
              </Button>
            </Link>
          </div>

          {/* Right Content - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png"
                alt="Salon élégant du Palais Florentin avec mobilier haut de gamme"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png"
                alt="Chambre élégante avec vue sur terrasse et mer du Palais Florentin"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/d7c53285-e562-4703-bd4c-2dbe6f452939.png"
                alt="Cuisine moderne entièrement équipée du Palais Florentin"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/ae2e7277-2e48-45ab-b91f-2bec37932574.png"
                alt="Salle de bain moderne avec douche du Palais Florentin"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentPreview;