import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ReservationSchema from '@/components/ReservationSchema';
import LodgifyWidget from '@/components/LodgifyWidget';

const Reserver = () => {
  const seoData = {
    title: "Réserver l'Appartement Palais Florentin | Location Beausoleil Monaco",
    description: "Réservez votre séjour dans notre appartement de luxe avec vue mer panoramique. Réservation sécurisée en ligne avec Lodgify, prix transparents. Location courte durée à 150m du Casino Monte-Carlo.",
    keywords: "réserver appartement monaco, location beausoleil, réservation en ligne, appartement vue mer, location courte durée monaco, réserver palais florentin",
    canonical: "https://palais-florentin.com/reserver",
    ogImage: "/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png",
    type: "website" as const,
    tags: ["réservation", "appartement", "monaco", "beausoleil", "location courte durée"]
  };

  return (
    <>
      <SEOHead {...seoData} />
      <ReservationSchema />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Réserver Votre Séjour
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Réservez facilement votre appartement de luxe avec vue mer panoramique. 
                Réservation sécurisée en ligne avec Lodgify, confirmation immédiate.
              </p>
            </section>

            {/* Widget Lodgify pour réservation directe */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Réservation en ligne avec Lodgify
                  </h2>
                  <p className="text-gray-600">
                    Vérifiez la disponibilité et réservez directement en ligne
                  </p>
                </div>
                <LodgifyWidget />
              </div>
            </section>

            {/* Informations de réservation */}
            <section className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Avantages de la réservation */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Pourquoi réserver avec Lodgify ?
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Réservation sécurisée et instantanée
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Calendrier de disponibilité en temps réel
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Paiement sécurisé en ligne
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Confirmation immédiate
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      Support client 24h/24
                    </li>
                  </ul>
                </div>

                {/* Informations pratiques */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Informations pratiques
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h4 className="font-semibold text-gray-800">Check-in</h4>
                      <p>À partir de 16h00</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Check-out</h4>
                      <p>Jusqu'à 11h00</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Capacité</h4>
                      <p>Maximum 4 personnes</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Animaux</h4>
                      <p>Non autorisés</p>
                    </div>
                  </div>
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

export default Reserver;