import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

const Breadcrumbs = ({ items, className, showHome = true }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Générer automatiquement les breadcrumbs si pas fournis
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Mapper les segments aux labels français
      const labelMap: Record<string, string> = {
        'appartement': 'Appartement',
        'emplacement': 'Emplacement',
        'reserver': 'Réserver',
        'services': 'Services',
        'contact': 'Contact',
        'mentions-legales': 'Mentions Légales',
        'politique-confidentialite': 'Politique de Confidentialité'
      };
      
      const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      
      breadcrumbs.push({
        label,
        href: currentPath,
        current: index === pathSegments.length - 1
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = items || generateBreadcrumbs();
  
  // Données structurées pour les breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://palais-florentin.com${item.href}` : undefined
    }))
  };

  return (
    <>
      {/* Données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Navigation breadcrumbs */}
      <nav 
        aria-label="Breadcrumb"
        className={cn("flex items-center space-x-1 text-sm text-gray-500", className)}
      >
        {showHome && (
          <>
            <Link
              to="/"
              className="flex items-center hover:text-gray-700 transition-colors"
              aria-label="Accueil"
            >
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
          </>
        )}
        
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.current ? (
              <span 
                className="text-gray-900 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  to={item.href || '#'}
                  className="hover:text-gray-700 transition-colors"
                >
                  {item.label}
                </Link>
                {index < breadcrumbItems.length - 1 && (
                  <ChevronRight className="w-4 h-4 ml-1" />
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumbs;

