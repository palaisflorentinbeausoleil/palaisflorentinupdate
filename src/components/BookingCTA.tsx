import { Calendar, MessageCircle, Phone, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/lib/constants';

const BookingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1E2A3A] to-[#4DA3C5] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A3A]/90 to-[#4DA3C5]/90" />
      
      <div className="luxury-container relative z-10">
        <div className="text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current text-champagne-gold" />
              ))}
            </div>
          </div>
          
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Réservez Votre Séjour d'Exception
          </h2>
          
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Profitez d'un service personnalisé et d'un emplacement unique pour un séjour 
            inoubliable à Monaco. Réservation directe sans frais supplémentaires.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/reserver"
              onClick={() => {
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              <Button className="bg-champagne-gold hover:bg-champagne-gold/90 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                <Calendar className="w-5 h-5 mr-2" />
                Vérifier les Disponibilités
              </Button>
            </Link>
            
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bonjour%20!%20J%27aimerais%20plus%20d%27infos%20sur%20le%20Palais%20Florentin`} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direct
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Support 24h/7j</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Réservation immédiate</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>Service premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;