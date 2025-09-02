import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { CheckCircle2, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const Confirmation = () => {
  const seoData = {
    title: "Réservation Confirmée | Palais Florentin",
    description: "Votre réservation a été confirmée avec succès. Détails de votre séjour et informations pratiques pour votre arrivée au Palais Florentin.",
    canonical: "https://palais-florentin.com/confirmation"
  };

  return (
    <>
      <SEOHead {...seoData} />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Confirmation Header */}
            <section className="text-center mb-16">
              <div className="max-w-2xl mx-auto">
                <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h1 className="text-5xl font-display font-bold text-[hsl(210_35%_17%)] mb-6">
                  Réservation Confirmée !
                </h1>
                <p className="text-xl text-[hsl(0_0%_55%)] leading-relaxed">
                  Félicitations ! Votre séjour au Palais Florentin a été confirmé avec succès. 
                  Nous sommes ravis de vous accueillir dans notre appartement de luxe avec vue mer panoramique.
                </p>
              </div>
            </section>

            {/* Détails de la réservation */}
            <section className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-[hsl(32_25%_88%)]">
                <h2 className="text-3xl font-display font-bold text-[hsl(210_35%_17%)] mb-8 text-center">
                  Détails de votre séjour
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Informations pratiques */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[hsl(210_35%_17%)] mb-4">
                      Informations pratiques
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[hsl(40_45%_57%)] mt-1" />
                        <div>
                          <h4 className="font-medium text-[hsl(210_35%_17%)]">Check-in</h4>
                          <p className="text-[hsl(0_0%_55%)]">À partir de 16h00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-[hsl(40_45%_57%)] mt-1" />
                        <div>
                          <h4 className="font-medium text-[hsl(210_35%_17%)]">Check-out</h4>
                          <p className="text-[hsl(0_0%_55%)]">Jusqu'à 11h00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[hsl(40_45%_57%)] mt-1" />
                        <div>
                          <h4 className="font-medium text-[hsl(210_35%_17%)]">Adresse</h4>
                          <p className="text-[hsl(0_0%_55%)]">2 Avenue Charles de Gaulle<br />06240 Beausoleil, France</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Prochaines étapes */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[hsl(210_35%_17%)] mb-4">
                      Prochaines étapes
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-[hsl(40_25%_96%)] rounded-lg p-4 border-l-4 border-[hsl(40_45%_57%)]">
                        <h4 className="font-medium text-[hsl(210_35%_17%)] mb-2">1. Email de confirmation</h4>
                        <p className="text-sm text-[hsl(0_0%_55%)]">Vous recevrez un email avec tous les détails de votre réservation</p>
                      </div>
                      
                      <div className="bg-[hsl(40_25%_96%)] rounded-lg p-4 border-l-4 border-[hsl(40_45%_57%)]">
                        <h4 className="font-medium text-[hsl(210_35%_17%)] mb-2">2. Instructions d'arrivée</h4>
                        <p className="text-sm text-[hsl(0_0%_55%)]">Codes d'accès et instructions détaillées 24h avant</p>
                      </div>
                      
                      <div className="bg-[hsl(40_25%_96%)] rounded-lg p-4 border-l-4 border-[hsl(40_45%_57%)]">
                        <h4 className="font-medium text-[hsl(210_35%_17%)] mb-2">3. Support client</h4>
                        <p className="text-sm text-[hsl(0_0%_55%)]">Notre équipe est disponible 24h/24 pour vous aider</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact et actions */}
            <section className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-[hsl(40_25%_96%)] to-[hsl(32_30%_80%)] rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-[hsl(210_35%_17%)] mb-6">
                  Besoin d'aide ?
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a 
                    href="tel:+33612169320"
                    className="inline-flex items-center px-6 py-3 bg-[hsl(210_35%_17%)] text-[hsl(40_25%_96%)] rounded-lg hover:bg-[hsl(210_35%_12%)] transition-all duration-300 font-medium"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +33 6 12 16 93 20
                  </a>
                  
                  <a 
                    href="mailto:brem.collection@gmail.com"
                    className="inline-flex items-center px-6 py-3 bg-[hsl(40_45%_57%)] text-[hsl(210_35%_17%)] rounded-lg hover:bg-[hsl(40_45%_45%)] transition-all duration-300 font-medium"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Nous écrire
                  </a>
                </div>
                
                <p className="text-[hsl(0_0%_55%)] mb-6">
                  Notre équipe est là pour vous accompagner à chaque étape de votre séjour
                </p>
                
                <a 
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-[hsl(210_35%_17%)] text-[hsl(40_25%_96%)] rounded-lg hover:bg-[hsl(210_35%_12%)] transition-all duration-300 font-medium text-lg"
                >
                  Retour à l'accueil
                </a>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Confirmation;

