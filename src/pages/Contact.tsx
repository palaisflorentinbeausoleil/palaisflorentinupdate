import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle, Car, Plane, Train } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CONTACT_INFO, PROPERTY_INFO } from '@/lib/constants';
import StickyBookingButton from '@/components/StickyBookingButton';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact Palais Florentin - Réservation et Informations | Monaco Beausoleil"
        description="Contactez-nous pour réserver votre séjour au Palais Florentin. WhatsApp 24h/24, téléphone, email. Accès et plan depuis l'aéroport de Nice."
        canonical="https://palais-florentin.com/contact"
      />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="luxury-container">
            <div className="text-center">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Contact & Accès
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Nous sommes à votre disposition pour organiser votre séjour et 
                répondre à toutes vos questions. Service personnalisé 24h/24.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-20">
          <div className="luxury-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="luxury-card text-center p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Réponse immédiate</p>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bonjour%20!%20J%27aimerais%20plus%20d%27infos%20sur%20le%20Palais%20Florentin`} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Ouvrir WhatsApp
                  </Button>
                </a>
              </Card>

              <Card className="luxury-card text-center p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                <p className="text-muted-foreground mb-4">{CONTACT_INFO.phone}</p>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                  <Button className="btn-luxury">
                    Appeler
                  </Button>
                </a>
              </Card>

              <Card className="luxury-card text-center p-8">
                <div className="w-16 h-16 bg-azure-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-azure-blue" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">{CONTACT_INFO.email}</p>
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  <Button className="btn-secondary-luxury">
                    Envoyer un Email
                  </Button>
                </a>
              </Card>
            </div>

            {/* Horaires */}
            <Card className="luxury-card mb-16">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>Horaires de Disponibilité</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Support Client</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lundi - Vendredi</span>
                        <span className="font-medium">9h00 - 21h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Samedi - Dimanche</span>
                        <span className="font-medium">10h00 - 20h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">WhatsApp</span>
                        <span className="font-medium text-green-600">24h/24</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Check-in / Check-out</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Arrivée</span>
                        <span className="font-medium">À partir de 15h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Départ</span>
                        <span className="font-medium">Avant 11h00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Accès autonome</span>
                        <span className="font-medium text-accent">Disponible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Adresse et Accès */}
        <section className="py-20 bg-secondary/30">
          <div className="luxury-container">
            <h2 className="font-display text-3xl font-bold text-center mb-16">
              Adresse & Comment Nous Rejoindre
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Adresse</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-2">Palais Florentin</h3>
                    <p className="text-muted-foreground">
                      {CONTACT_INFO.address.street}<br />
                      {CONTACT_INFO.address.city}<br />
                      {CONTACT_INFO.address.country} (frontière Monaco)
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm">150m des jardins du Casino de Monte-Carlo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm">950m des plages de Monaco</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span className="text-sm">Vue panoramique sur la Méditerranée</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="luxury-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plane className="w-5 h-5 text-accent" />
                      <span>Depuis l'Aéroport</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">Aéroport Nice Côte d'Azur</p>
                        <p className="text-sm text-muted-foreground">22 km - 25 min en voiture</p>
                      </div>
                      <div>
                        <p className="font-medium">Hélicoptère Monaco</p>
                        <p className="text-sm text-muted-foreground">7 min de vol direct</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Train className="w-5 h-5 text-accent" />
                      <span>En Train</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">Gare de Monaco-Monte-Carlo</p>
                        <p className="text-sm text-muted-foreground">800m - 10 min à pied</p>
                      </div>
                      <div>
                        <p className="font-medium">TER depuis Nice</p>
                        <p className="text-sm text-muted-foreground">30 min de trajet</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Car className="w-5 h-5 text-accent" />
                      <span>En Voiture</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">Autoroute A8</p>
                        <p className="text-sm text-muted-foreground">Sortie Monaco - 5 min</p>
                      </div>
                      <div>
                        <p className="font-medium">Parking privé en option</p>
                        <p className="text-sm text-muted-foreground">Place couverte sécurisée</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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

export default Contact;