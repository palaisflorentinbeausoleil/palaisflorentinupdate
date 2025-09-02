import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead 
        title="Page non trouvée - Palais Florentin"
        description="Cette page n'existe pas. Retournez à l'accueil pour découvrir notre appartement de prestige à Beausoleil."
        canonical={`https://palais-florentin.com${location.pathname}`}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="luxury-container text-center">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <MapPin className="w-20 h-20 text-accent mx-auto mb-6" />
                <h1 className="font-display text-6xl font-bold text-foreground mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Page introuvable</h2>
                <p className="text-muted-foreground mb-8">
                  Désolé, la page que vous recherchez n'existe pas. 
                  Retournez à l'accueil pour découvrir le Palais Florentin.
                </p>
              </div>
              
              <Link to="/">
                <Button className="btn-luxury group">
                  <Home className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
