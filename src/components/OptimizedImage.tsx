import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = '100vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Optimiser l'URL de l'image pour les performances
  const getOptimizedSrc = (originalSrc: string) => {
    // Si c'est une image externe, on la retourne telle quelle
    if (originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // Pour les images locales, on peut ajouter des paramètres d'optimisation
    // selon le système de build utilisé
    return originalSrc;
  };

  useEffect(() => {
    setImageSrc(getOptimizedSrc(src));
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Attributs SEO optimisés
  const imageAttributes = {
    src: imageSrc,
    alt: alt,
    width: width,
    height: height,
    sizes: sizes,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async' as const,
    onLoad: handleLoad,
    onError: handleError,
    className: cn(
      'transition-opacity duration-300',
      isLoading ? 'opacity-0' : 'opacity-100',
      hasError ? 'opacity-50' : '',
      className
    )
  };

  // Placeholder pendant le chargement
  if (isLoading && placeholder === 'blur' && blurDataURL) {
    return (
      <div className="relative overflow-hidden">
        <img
          src={blurDataURL}
          alt=""
          className={cn(
            'absolute inset-0 w-full h-full object-cover filter blur-sm scale-110',
            className
          )}
          aria-hidden="true"
        />
        <img {...imageAttributes} />
      </div>
    );
  }

  // Image avec skeleton pendant le chargement
  if (isLoading && placeholder === 'empty') {
    return (
      <div className="relative">
        <div className={cn(
          'bg-gray-200 animate-pulse',
          className
        )} style={{ width, height }} />
        <img {...imageAttributes} />
      </div>
    );
  }

  // Image avec fallback en cas d'erreur
  if (hasError) {
    return (
      <div className={cn(
        'flex items-center justify-center bg-gray-100 text-gray-500',
        className
      )} style={{ width, height }}>
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Image non disponible</span>
        </div>
      </div>
    );
  }

  return <img {...imageAttributes} />;
};

export default OptimizedImage;

