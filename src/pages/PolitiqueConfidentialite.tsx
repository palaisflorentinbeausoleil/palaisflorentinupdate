import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SEOHead 
        title="Politique de Confidentialité - Palais Florentin | Protection des Données"
        description="Politique de confidentialité du Palais Florentin. Protection des données personnelles selon le RGPD. Sécurité et confidentialité garanties."
        canonical="https://palais-florentin.com/politique-confidentialite"
      />
      <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-20">
        <div className="luxury-container max-w-4xl">
          <h1 className="font-display text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Protection des données</h2>
              <p>Vos données personnelles sont collectées uniquement pour les besoins de votre réservation et protégées selon le RGPD.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;