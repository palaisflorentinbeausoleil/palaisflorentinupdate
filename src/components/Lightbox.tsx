import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LightboxProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, isOpen, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset state when opening/closing or changing images
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, goToNext, goToPrevious, onClose]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetZoom();
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetZoom();
  }, [images.length]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev * 1.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev / 1.2, 0.5));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[currentIndex].src;
    link.download = `palais-florentin-${currentIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Header Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <span className="text-white/80 text-sm">
            {currentIndex + 1} / {images.length}
          </span>
          {currentImage.title && (
            <span className="text-white font-medium">
              {currentImage.title}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
            className="text-white hover:bg-white/10"
            disabled={scale <= 0.5}
          >
            <ZoomOut className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              resetZoom();
            }}
            className="text-white hover:bg-white/10"
            disabled={scale === 1}
          >
            <span className="text-sm font-mono">{Math.round(scale * 100)}%</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
            className="text-white hover:bg-white/10"
            disabled={scale >= 3}
          >
            <ZoomIn className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              handleDownload();
            }}
            className="text-white hover:bg-white/10"
          >
            <Download className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Main Image */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className={`max-w-full max-h-full object-contain transition-all duration-300 ${
            isDragging ? 'cursor-grabbing' : scale > 1 ? 'cursor-grab' : 'cursor-zoom-in'
          }`}
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`
          }}
          onLoad={() => setIsLoading(false)}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={scale === 1 ? handleZoomIn : undefined}
          draggable={false}
        />
        
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Thumbnails Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-lg p-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
                resetZoom();
              }}
              className={`w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex 
                  ? 'border-white shadow-lg' 
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 right-4 text-white/60 text-xs space-y-1">
        <div>Clic: Zoom • Glissez: Déplacer</div>
        <div>←→: Navigation • Échap: Fermer</div>
      </div>
    </div>
  );
};

export default Lightbox;