import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, PROPERTY_INFO } from '@/lib/constants';

const Footer = () => {
  const footerLinks = {
    navigation: [
      { name: 'Accueil', href: '/' },
      { name: "L'Appartement", href: '/appartement' },
      { name: 'Vue & Emplacement', href: '/emplacement' },
      { name: 'Réserver', href: '/reserver' },
    ],
    services: [
      { name: 'Services & FAQ', href: '/services' },
      { name: 'Contact & Accès', href: '/contact' },
      { name: 'Mentions Légales', href: '/mentions-legales' },
      { name: 'Politique de Confidentialité', href: '/politique-confidentialite' },
    ],
  };

  return (
    <footer className="bg-[#1E2A3A] text-[#F8F6F2]">
      <div className="luxury-container">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="gold-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{PROPERTY_INFO.name}</h3>
                <p className="text-primary-foreground/80">{PROPERTY_INFO.subtitle}</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              {PROPERTY_INFO.description}
            </p>

            <div className="space-y-3">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5" />
                <span>{CONTACT_INFO.address.full}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Legal */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services & Légal</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nos Autres Propriétés */}
        <div className="py-12 border-t border-primary-foreground/20">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
              Nos Autres Propriétés
            </h3>
            <p className="text-primary-foreground/80">
              Découvrez notre collection de biens d'exception
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Villa Hautvallon */}
            <a
              href="https://www.villa-hautvallon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl border border-primary-foreground/20 hover:border-accent hover:shadow-lg transition-all duration-300 bg-primary/5 hover:bg-primary/10"
            >
              <div className="text-center">
                <h4 className="font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                  Villa Hautvallon
                </h4>
                <p className="text-sm text-primary-foreground/80 mb-3">Boutique Guesthouse Gordes</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                  🇫🇷 France
                </span>
              </div>
            </a>

            {/* Clos de Manon */}
            <a
              href="https://www.booking.com/Share-vRWFdK"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl border border-primary-foreground/20 hover:border-accent hover:shadow-lg transition-all duration-300 bg-primary/5 hover:bg-primary/10"
            >
              <div className="text-center">
                <h4 className="font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                  Clos de Manon
                </h4>
                <p className="text-sm text-primary-foreground/80 mb-3">Location maison de vacance Gordes</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                  🇫🇷 France
                </span>
              </div>
            </a>

            {/* Hunurijarvi */}
            <a
              href="https://hunurijarvi.fi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl border border-primary-foreground/20 hover:border-accent hover:shadow-lg transition-all duration-300 bg-primary/5 hover:bg-primary/10"
            >
              <div className="text-center">
                <h4 className="font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                  Hunurijarvi
                </h4>
                <p className="text-sm text-primary-foreground/80 mb-3">Holiday resort Finland</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                  🇫🇮 Finlande
                </span>
              </div>
            </a>

            {/* Fincollection */}
            <a
              href="https://www.instagram.com/finncollectiongroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl border border-primary-foreground/20 hover:border-accent hover:shadow-lg transition-all duration-300 bg-primary/5 hover:bg-primary/10"
            >
              <div className="text-center">
                <h4 className="font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                  Fincollection
                </h4>
                <p className="text-sm text-primary-foreground/80 mb-3">Location Chalet Laponie</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                  🇫🇮 Finlande
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Palais Florentin. Tous droits réservés.
            </div>
            
            {/* Social Links & Contact */}
            <div className="flex items-center space-x-6">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bonjour%20!%20J%27aimerais%20plus%20d%27infos%20sur%20le%20Palais%20Florentin`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;