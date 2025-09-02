import { useState, useEffect } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '@/lib/constants';

const StickyBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button - Plus visible */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bonjour%20!%20J%27aimerais%20plus%20d%27infos%20sur%20le%20Palais%20Florentin`}
        target="_blank" 
        rel="noopener noreferrer"
        className="group"
      >
        <Button className="bg-green-600 hover:bg-green-700 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 min-w-[160px]">
          <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          WhatsApp
        </Button>
      </a>

      {/* Main Booking Button */}
      <Link 
        to="/reserver"
        onClick={() => {
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
        }}
      >
        <Button className="btn-luxury shadow-2xl hover:shadow-accent/25 group min-w-[160px]">
          <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
          Réserver
        </Button>
      </Link>
    </div>
  );
};

export default StickyBookingButton;