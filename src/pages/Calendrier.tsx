import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import CalendarSchema from '@/components/CalendarSchema';
import CalendrierLodgify from '@/components/CalendrierLodgify';
import { Calendar, Clock, MapPin, Phone, Mail, Info } from 'lucide-react';

const Calendrier = () => {
  const seoData = {
    title: "Calendrier de Disponibilités | Palais Florentin - Location Beausoleil Monaco",
    description: "Consultez notre calendrier de disponibilités en temps réel. Vérifiez les dates disponibles, les prix par nuit et réservez directement en ligne votre séjour au Palais Florentin.",
    keywords: "calendrier disponibilités, palais florentin, location beausoleil, prix par nuit, réservation en ligne, monaco",
    canonical: "https://palais-florentin.com/calendrier"
  };

  return (
    <>
      <SEOHead {...seoData} />
      <CalendarSchema />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="py-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[hsl(40_45%_57%)] rounded-full mb-6">
                  <Calendar className="w-10 h-10 text-[hsl(210_35%_17%)]" />
                </div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-[hsl(210_35%_17%)] mb-6">
                  Calendrier de Disponibilités
                </h1>
                <p className="text-xl text-[hsl(0_0%_55%)] leading-relaxed max-w-3xl mx-auto">
                  Consultez en temps réel les disponibilités de notre appartement de luxe avec vue mer panoramique. 
                  Sélectionnez vos dates et réservez directement en ligne.
                </p>
              </div>
            </section>

            {/* Informations importantes */}
            <section className="max-w-6xl mx-auto mb-16">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-[hsl(32_25%_88%)] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-[hsl(40_45%_57%)]" />
                    <h3 className="text-lg font-semibold text-[hsl(210_35%_17%)]">Horaires d'arrivée</h3>
                  </div>
                  <p className="text-[hsl(0_0%_55%)]">
                    Check-in à partir de <strong>16h00</strong><br />
                    Check-out jusqu'à <strong>11h00</strong>
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[hsl(32_25%_88%)] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[hsl(40_45%_57%)]" />
                    <h3 className="text-lg font-semibold text-[hsl(210_35%_17%)]">Emplacement</h3>
                  </div>
                  <p className="text-[hsl(0_0%_55%)]">
                    <strong>150m</strong> du Casino Monte-Carlo<br />
                    Vue mer panoramique <strong>180°</strong>
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-[hsl(32_25%_88%)] shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="w-6 h-6 text-[hsl(40_45%_57%)]" />
                    <h3 className="text-lg font-semibold text-[hsl(210_35%_17%)]">Capacité</h3>
                  </div>
                  <p className="text-[hsl(0_0%_55%)]">
                    Maximum <strong>4 personnes</strong><br />
                    Appartement <strong>50m²</strong> + terrasse
                  </p>
                </div>
              </div>
            </section>

            {/* Calendrier principal */}
            <section className="max-w-7xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-[hsl(32_25%_88%)]">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-display font-bold text-[hsl(210_35%_17%)] mb-4">
                    Disponibilités et Tarifs
                  </h2>
                  <p className="text-lg text-[hsl(0_0%_55%)]">
                    Sélectionnez vos dates pour voir les prix et la disponibilité
                  </p>
                </div>
                
                <CalendrierLodgify />
              </div>
            </section>

            {/* Légende et informations */}
            <section className="max-w-4xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-[hsl(40_25%_96%)] to-[hsl(32_30%_80%)] rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-[hsl(210_35%_17%)] mb-6 text-center">
                  Comment utiliser le calendrier
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-[hsl(210_35%_17%)] text-lg">Navigation</h4>
                    <ul className="space-y-2 text-[hsl(0_0%_55%)]">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[hsl(40_45%_57%)] rounded-full mt-2 flex-shrink-0"></span>
                        Utilisez les flèches pour naviguer entre les mois
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[hsl(40_45%_57%)] rounded-full mt-2 flex-shrink-0"></span>
                        Cliquez sur une date pour la sélectionner
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-[hsl(40_45%_57%)] rounded-full mt-2 flex-shrink-0"></span>
                        Sélectionnez vos dates d'arrivée et de départ
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-[hsl(210_35%_17%)] text-lg">Couleurs</h4>
                    <ul className="space-y-2 text-[hsl(0_0%_55%)]">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[hsl(40_45%_57%)] rounded"></div>
                        <span>Dates disponibles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[hsl(0_0%_95%)] rounded border border-[hsl(32_25%_88%)]"></div>
                        <span>Dates non disponibles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[hsl(210_35%_17%)] rounded"></div>
                        <span>Dates sélectionnées</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact et réservation */}
            <section className="max-w-4xl mx-auto text-center">
              <div className="bg-[hsl(210_35%_17%)] rounded-2xl p-8 text-[hsl(40_25%_96%)]">
                <h3 className="text-3xl font-display font-bold mb-6">
                  Besoin d'aide pour votre réservation ?
                </h3>
                
                <p className="text-lg mb-8 opacity-90">
                  Notre équipe est disponible 24h/24 pour vous accompagner dans votre projet de séjour
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+33612169320"
                    className="inline-flex items-center px-8 py-4 bg-[hsl(40_45%_57%)] text-[hsl(210_35%_17%)] rounded-lg hover:bg-[hsl(40_45%_45%)] transition-all duration-300 font-semibold text-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +33 6 12 16 93 20
                  </a>
                  
                  <a 
                    href="mailto:brem.collection@gmail.com"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[hsl(40_45%_57%)] text-[hsl(40_45%_57%)] rounded-lg hover:bg-[hsl(40_45%_57%)] hover:text-[hsl(210_35%_17%)] transition-all duration-300 font-semibold text-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Nous écrire
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Calendrier;
