import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LodgifyWidget from '@/components/LodgifyWidget';
import SEOHead from '@/components/SEOHead';

const LodgifyTest = () => {
  const seoData = {
    title: "Test Widget Lodgify | Palais Florentin",
    description: "Page de test pour le widget de réservation Lodgify",
    canonical: "https://palais-florentin.com/lodgify-test"
  };

  return (
    <>
      <SEOHead {...seoData} />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Test Widget Lodgify
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Page de test pour vérifier le bon fonctionnement du widget de réservation Lodgify
              </p>
            </section>

            {/* Widget Lodgify */}
            <section className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Widget de Réservation Lodgify
                  </h2>
                  <p className="text-gray-600">
                    Testez la fonctionnalité de réservation en ligne
                  </p>
                </div>
                
                <LodgifyWidget />
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Instructions de test :</h3>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>• Sélectionnez des dates d'arrivée et de départ</li>
                    <li>• Choisissez le nombre d'invités</li>
                    <li>• Cliquez sur "Rechercher"</li>
                    <li>• Vérifiez que vous êtes redirigé vers la page de paiement Lodgify</li>
                  </ul>
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

export default LodgifyTest;
