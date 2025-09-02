import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Wind, Wifi, Car, Shield, ChefHat, Tv, Sun, Users, Clock, Star } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/constants';

const Services = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Services Personnalisés",
      description: "Prestations sur-mesure pour un séjour parfait",
      features: ["Ménage quotidien", "Pressing", "Massage à domicile", "Baby-sitting qualifié"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Parking & Transport",
      description: "Place de parking sécurisé en option",
      features: ["Place de parking sécurisé en option", "Borne de recharge électrique à proximité", "Navette aéroport sur demande"]
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Services Culinaires",
      description: "Cuisine équipée premium et services gastronomiques",
      features: ["Chef à domicile", "Courses de bienvenue", "Petit-déjeuner livré"]
    }
  ];

  const equipments = [
    {
      category: "Cuisine & Électroménager",
      items: [
        "Réfrigérateur-congélateur",
        "Four micro-ondes",
        "Plaque électrique",
        "Machine à café Nespresso",
        "Bouilloire électrique",
        "Grille-pain",
        "Ustensiles de cuisine"
      ]
    },
    {
      category: "Confort & Climatisation",
      items: [
        "Climatisation réversible dans toutes les pièces",
        "Chauffage au sol salle de bain",
        "Volets électriques",
        "Stores occultants chambre"
      ]
    },
    {
      category: "Entertainment & Connectivité",
      items: [
        "TV 4K 55 pouces Samsung",
        "WiFi fibre 1Gb/s",
        "Netflix, Prime Video, Disney+",
        "Enceintes Bluetooth"
      ]
    },
    {
      category: "Literie & Mobilier",
      items: [
        "Lit queen size 160x200 premium",
        "Matelas à mémoire de forme",
        "Linge de lit haut de gamme",
        "Canapé-lit convertible haut de gamme",
        "Mobilier design",
        "Coffre-fort"
      ]
    }
  ];

  const faqData = [
    {
      question: "Le parking est-il inclus ?",
      answer: "Un emplacement privé est disponible dans l'immeuble sur demande (en supplément)."
    },
    {
      question: "Quelle est la distance avec le Casino de Monte-Carlo ?",
      answer: "Seulement 500 mètres, soit environ 6 minutes à pied."
    },
    {
      question: "L'appartement dispose-t-il d'une vue mer ?",
      answer: "Oui, la vue mer panoramique est visible depuis le séjour, la chambre et la terrasse."
    },
    {
      question: "La plage est-elle proche ?",
      answer: "Oui, les plages de la Principauté sont à 950 mètres."
    },
    {
      question: "Quels services sont inclus ?",
      answer: "Wifi haut débit, TV connectée avec Netflix/Prime/Disney+, climatisation, linge fourni, arrivée autonome avec serrure connectée."
    },
    {
      question: "Proposez-vous un ménage en cours de séjour ?",
      answer: "Oui, sur demande (35 €/h)."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Services et FAQ Palais Florentin - Conciergerie et Équipements | Monaco"
        description="Découvrez nos services haut de gamme : conciergerie 24h/24, WiFi fibre, climatisation, cuisine équipée, parking inclus. FAQ complète."
        canonical="https://palais-florentin.com/services"
      />
      <StructuredData type="faq" />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="luxury-container">
            <div className="text-center">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Services Exclusifs sur Demande
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Découvrez tous nos équipements haut de gamme et services personnalisés 
                pour faire de votre séjour une expérience inoubliable à Monaco.
              </p>
            </div>
          </div>
        </section>

        {/* Services Premium */}
        <section className="py-20">
          <div className="luxury-container">
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Services Exclusifs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="luxury-card p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-accent fill-current" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Équipements */}
        <section className="py-20 bg-secondary/30">
          <div className="luxury-container">
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Équipements Haut de Gamme
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {equipments.map((category, index) => (
                <Card key={index} className="luxury-card">
                  <CardHeader>
                    <CardTitle className="text-foreground">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="luxury-container">
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Questions Fréquentes
            </h2>
            <div className="max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <Card key={index} className="mb-4 luxury-card">
                  <CardHeader>
                    <button
                      className="w-full text-left flex items-center justify-between"
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-accent" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-accent" />
                      )}
                    </button>
                  </CardHeader>
                  {openFAQ === index && (
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 ocean-gradient relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-azure-blue/90" />
          <div className="luxury-container relative z-10 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Une Question ? Nous Sommes Là
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible 24h/24 pour répondre à toutes vos questions 
              et personnaliser votre séjour selon vos souhaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bonjour%20!%20J%27aimerais%20plus%20d%27infos%20sur%20le%20Palais%20Florentin`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-champagne-gold hover:bg-champagne-gold/90 text-primary px-8 py-4 text-lg">
                  Contacter via WhatsApp
                </Button>
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 text-lg">
                  Appeler Directement
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default Services;