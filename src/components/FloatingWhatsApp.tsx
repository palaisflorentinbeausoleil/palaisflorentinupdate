import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '@/lib/constants';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 lg:hidden">
      {/* WhatsApp Bubble - Mobile Only */}
      <div className="relative">
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bonjour%20!%20J%27aimerais%20plus%20d%27infos%20sur%20le%20Palais%20Florentin`}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center justify-center"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-110 animate-pulse">
            <MessageCircle className="w-6 h-6" />
          </div>
        </a>
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-1 text-xs transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Contactez-nous sur WhatsApp
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;