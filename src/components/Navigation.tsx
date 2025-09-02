import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/constants';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: "L'Appartement", href: '/appartement' },
    { name: 'Vue & Emplacement', href: '/emplacement' },
    { name: 'Calendrier', href: '/calendrier' },
    { name: 'Réserver', href: '/reserver' },
    { name: 'Services & FAQ', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-[#F8F6F2]/95 backdrop-blur-sm border-b border-[#DCCBB6]/50 sticky top-0 z-50">
      <div className="luxury-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="gold-gradient w-10 h-10 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-xl font-semibold text-[#1E2A3A]">
                Palais Florentin
              </h1>
              <p className="text-sm text-[#8B8B8B]">Beausoleil • Monaco</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActivePage(item.href)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{CONTACT_INFO.phone}</span>
            </a>
            <Link to="/reserver">
              <Button className="btn-luxury">
                Réserver
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActivePage(item.href)
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{CONTACT_INFO.phone}</span>
                </a>
                <Link to="/reserver" onClick={() => setIsOpen(false)}>
                  <Button className="btn-luxury w-full">
                    Réserver
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;