import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import VacationRentalStructuredData from '@/components/VacationRentalStructuredData';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StickyBookingButton from '@/components/StickyBookingButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Wifi, Tv, Snowflake, Car, Coffee, Utensils, Bed, Users, Square, Sun, Eye, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const Appartement = () => {
  const seoData = {
    title: "Appartement Palais Florentin - Vue Mer Panoramique | Location Beausoleil Monaco",
    description: "Découvrez notre appartement 2 pièces de luxe de 50m² avec terrasse 20m² plein sud, vue mer panoramique 180°, entièrement rénové avec matériaux haut de gamme. Location courte durée à 150m du Casino Monte-Carlo.",
    keywords: "appartement vue mer monaco, location beausoleil, terrasse 20m², vue panoramique, appartement luxe monaco, location courte durée beausoleil, casino monte carlo, riviera française",
    canonical: "https://palais-florentin.com/appartement",
    ogImage: "/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
    type: "product" as const,
    tags: ["appartement", "vue mer", "terrasse", "luxe", "monaco", "beausoleil", "location courte durée"]
  };

  const apartmentFeatures = [
    { icon: Snowflake, label: "Climatisation réversible", description: "Confort toute l'année" },
    { icon: Wifi, label: "WiFi rapide", description: "WiFi rapide" },
    { icon: Coffee, label: "Cuisine fonctionnelle", description: "Cuisine fonctionnelle" },
    { icon: Tv, label: "TV 4K 55 pouces", description: "Smart TV" },
    { icon: Car, label: "Parking Privé Sécurisé", description: "Place couverte sur option" },
    { icon: Shield, label: "Sécurité 24h/24", description: "Concierge et vidéosurveillance" },
    { icon: Sun, label: "Terrasse Plein Sud", description: "20m² avec mobilier de jardin" },
    { icon: Eye, label: "Vue Mer Panoramique", description: "180° sur la Méditerranée" }
  ];

  const rooms = [
    {
      title: "Salon",
      area: "25m²",
      description: "Espace de vie principal avec table basse design et accès direct à la terrasse. Vue mer panoramique.",
      features: ["Canapé premium", "Climatisation", "TV 4K", "Baies vitrées"]
    },
    {
      title: "Chambre",
      area: "12m²",
      description: "Chambre principale avec lit queen size, dressing intégré et vue mer partielle.",
      features: ["Lit queen 160x200", "Stores électriques", "Dressing sur-mesure", "Climatisation"]
    },
    {
      title: "Cuisine",
      area: "",
      description: "Petite cuisine fonctionnelle entièrement équipée pour vos besoins essentiels.",
      features: ["Frigo/congélateur", "Plaque cuisson", "Micro ondes", "Machine à café"]
    },
    {
      title: "Salle de Bain",
      area: "",
      description: "Belle salle de bain avec grande douche, vasque et rangements.",
      features: ["Grande douche", "Rangements", "Vasque", "Miroir"]
    }
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/a42bc02c-3520-49f6-8f01-836b428a034e.png",
      alt: "Salon avec vue mer panoramique",
      caption: "Salon avec vue mer panoramique"
    },
    {
      src: "/lovable-uploads/704de42e-69b7-4d7c-8f3e-454f8de0eaf6.png",
      alt: "Chambre principale",
      caption: "Chambre principale"
    },
    {
      src: "/lovable-uploads/d7c53285-e562-4703-bd4c-2dbe6f452939.png",
      alt: "Coin cuisine salle à manger",
      caption: "Coin cuisine salle à manger"
    },
    {
      src: "/lovable-uploads/ae2e7277-2e48-45ab-b91f-2bec37932574.png",
      alt: "Salle de bain",
      caption: "Salle de bain"
    },
    {
      src: "/lovable-uploads/f193ee2f-20e6-458e-ae60-5426571ab4e3.png",
      alt: "Salon avec vue mer",
      caption: "Salon avec vue mer"
    },
    {
      src: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
      alt: "Terrasse plein sud avec vue mer",
      caption: "Terrasse plein sud avec vue mer"
    }
  ];

  return (
    <>
      <SEOHead {...seoData} />
      <StructuredData type="apartment" />
      <VacationRentalStructuredData />
      <StructuredData type="breadcrumb" data={{ currentPage: "Appartement", path: "/appartement" }} />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="py-20 bg-[#F8F6F2]">
            <div className="luxury-container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8">
                  Un 2 pièces lumineux, raffiné et idéalement situé
                </h1>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-left">
                  <p>
                    Situé au 6ᵉ et avant-dernier étage d'une résidence de standing sécurisée avec ascenseur, 
                    le Palais Florentin vous offre un cadre luxueux à deux pas du Casino de Monte-Carlo.
                  </p>
                  <p>
                    Le séjour et la chambre s'ouvrent sur une terrasse plein sud de 20 m², idéale pour profiter 
                    du soleil méditerranéen tout en admirant la vue mer panoramique. Chaque pièce est équipée 
                    d'une télévision écran plat et d'une climatisation réversible. La literie est haut de gamme 
                    pour un confort optimal.
                  </p>
                  <p>
                    Cuisine indépendante entièrement équipée : micro-ondes, plaques électriques, hotte, 
                    réfrigérateur, machine à expresso, grille-pain, bouilloire.
                  </p>
                  <p>
                    Salle de bains moderne avec douche, lavabo, WC et bidet + WC séparé pour les invités.
                  </p>
                  <p>
                    De nombreux espaces de rangement et de belles finitions bois ajoutent à l'élégance des lieux.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center mt-10">
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">50m²</Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">2 pièces</Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">Vue mer 180°</Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">Terrasse 20m²</Badge>
                </div>
                <div className="mt-10">
                  <Button asChild size="lg" className="btn-luxury">
                    <Link to="/reserver">Réserver maintenant</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>



          {/* Équipements & Services */}
          <AnimatedSection>
            <section className="py-20 bg-secondary/30">
              <div className="luxury-container">
                <div className="text-center mb-16">
                  <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                    Équipements & Services
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {apartmentFeatures.map((feature, index) => (
                    <Card key={index} className="luxury-card text-center hover:shadow-luxury transition-all duration-300">
                      <CardContent className="p-6">
                        <feature.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                        <h3 className="font-semibold text-foreground mb-1 text-sm">{feature.label}</h3>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Espaces & Aménagements */}
          <AnimatedSection>
            <section className="py-20">
              <div className="luxury-container">
                <div className="text-center mb-16">
                  <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                    Espaces & Aménagements
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {rooms.map((room, index) => (
                    <Card key={index} className="luxury-card">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {room.title}
                          {room.area && <span className="text-accent text-sm">{room.area}</span>}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {room.description}
                        </p>
                        <div className="space-y-2">
                          {room.features.map((feature, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Galerie Photos */}
          <AnimatedSection>
            <section className="py-20 bg-secondary/30">
              <div className="luxury-container">
                <div className="text-center mb-16">
                  <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                    Galerie Photos
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="text-white text-sm font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection>
            <section className="py-20 ocean-gradient relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-azure-blue/90" />
              <div className="luxury-container relative z-10 text-center">
                <h2 className="font-display text-4xl font-bold text-white mb-6">
                  Réservez Votre Séjour d'Exception
                </h2>
                <p className="text-xl mb-10 max-w-3xl mx-auto text-white/90">
                  Découvrez la magie de la Riviera depuis notre appartement de luxe 
                  avec vue mer panoramique.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Link to="/reserver">Réserver maintenant</Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-bold text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Link to="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
        <StickyBookingButton />
      </div>
    </>
  );
};

export default Appartement;