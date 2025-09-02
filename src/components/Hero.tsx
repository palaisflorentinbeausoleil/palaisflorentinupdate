import { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Waves, Sun, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: <Waves className="w-5 h-5" />, text: "Vue mer panoramique" },
    { icon: <Sun className="w-5 h-5" />, text: "Terrasse 20m² plein sud" },
    { icon: <MapPin className="w-5 h-5" />, text: "150m des jardins du Casino" },
    { icon: <Crown className="w-5 h-5" />, text: "Appartement de prestige" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F8F6F2] via-[#F8F6F2] to-[#DCCBB6]">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F2]/80 via-[#F8F6F2]/60 to-transparent" />
      
      {/* Content */}
      <div className="luxury-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`fade-in-up ${isVisible ? 'animate' : ''}`}>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                <Crown className="w-4 h-4 mr-2" />
                Palais Florentin
              </span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-[#1E2A3A] mb-6 leading-tight">
                Palais Florentin – Élégance et Vue Mer aux Portes de Monaco
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-[#C9A35A] mb-6">
                Un appartement de standing à 150 m des jardins du Casino de Monte-Carlo et 950 m des plages.
              </h2>
              <p className="text-lg text-[#8B8B8B] mb-8 leading-relaxed">
                Profitez d'un séjour inoubliable dans un élégant 2 pièces de 50 m², rénové et climatisé, avec terrasse plein sud et vue panoramique sur la Méditerranée.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 fade-in-up ${
                    isVisible ? 'animate' : ''
                  }`}
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium text-[#1E2A3A]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 fade-in-up ${isVisible ? 'animate' : ''}`} style={{ animationDelay: '700ms' }}>
              <Link to="/reserver">
                <Button className="btn-luxury group">
                  Réserver votre séjour
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/appartement">
                <Button className="btn-secondary-luxury">
                  Découvrir l'appartement
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png"
                alt="Terrasse avec vue mer panoramique du Palais Florentin à Monaco"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;