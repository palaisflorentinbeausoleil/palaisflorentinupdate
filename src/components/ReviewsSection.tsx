import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    {
      author: "Claire M., France",
      content: "Appartement à Beausoleil avec vue mer incroyable ! À deux pas de Monaco et du Casino. Terrasse plein sud, literie haut de gamme… un bijou sur la Côte d'Azur."
    },
    {
      author: "David R., Royaume-Uni", 
      content: "Absolutely stunning apartment in Beausoleil, minutes from Monte-Carlo Casino and Larvotto. Spotless, beautifully decorated, and an unforgettable panoramic sea view."
    },
    {
      author: "Giulia P., Italie",
      content: "Bellissimo appartamento vicino a Monaco, in residenza di lusso a Beausoleil. Vista mare spettacolare e posizione perfetta per visitare Monte-Carlo a piedi."
    },
    {
      author: "Markus H., Allemagne",
      content: "Sehr schönes Apartment in Beausoleil, wenige Minuten vom Casino und den Stränden Monacos. Hochwertige Ausstattung, makellos sauber und traumhafter Meerblick."
    },
    {
      author: "Sophie L., Belgique",
      content: "Excellent séjour dans cet appartement de standing à Beausoleil, tout près de Monte-Carlo. Parking dans l'immeuble très pratique et grande terrasse avec vue mer."
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex((index + reviews.length) % reviews.length);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };

  const startAutoplay = useCallback(() => {
    if (timerRef.current) return;
    
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  }, [reviews.length]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isHovered && !document.hidden) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => stopAutoplay();
  }, [isHovered, currentIndex, startAutoplay, stopAutoplay]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else if (!isHovered) {
        startAutoplay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isHovered, startAutoplay, stopAutoplay]);

  return (
    <>
      <section 
        className="py-14 bg-[#F8F6F2]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-labelledby="reviews-title"
      >
        <div className="luxury-container">
          <div className="flex justify-between items-end gap-4 mb-4">
            <div>
              <h2 id="reviews-title" className="font-display text-3xl lg:text-4xl font-bold text-[#1E2A3A] mb-2">
                Ils ont séjourné au Palais Florentin
              </h2>
              <p className="text-sm text-[#8B8B8B]">
                Note moyenne <strong>4,9/5</strong> – Vue mer • Proximité Monaco • Confort haut de gamme
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="flex items-center justify-center w-11 h-11 bg-background border border-border rounded-xl hover:bg-accent hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Avis précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex items-center justify-center w-11 h-11 bg-background border border-border rounded-xl hover:bg-accent hover:-translate-y-0.5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Avis suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            className="relative overflow-hidden rounded-2xl"
            role="region" 
            aria-roledescription="carrousel" 
            aria-label="Avis clients"
          >
            <div 
              className="flex transition-transform duration-400 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              aria-live="polite"
            >
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="min-w-full p-6 bg-card border border-border"
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    {review.author}
                  </div>
                  <p className="text-lg leading-relaxed text-foreground m-0">
                    "{review.content}"
                  </p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div 
              className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2"
              role="tablist" 
              aria-label="Navigation des avis"
            >
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2.5 h-2.5 rounded-full border-0 cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    index === currentIndex 
                      ? 'bg-accent opacity-95 scale-105' 
                      : 'bg-foreground opacity-25'
                  }`}
                  onClick={() => goToSlide(index)}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-controls="reviews-slider"
                  aria-label={`Aller à l'avis ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Palais Florentin",
            "image": ["/lovable-uploads/d3c45090-3ecb-4dea-8543-597fcf390c2e.png"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": CONTACT_INFO.address.street,
              "addressLocality": "06240 Beausoleil",
              "postalCode": "06240",
              "addressCountry": "France"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "5"
            },
            "review": reviews.map(review => ({
              "@type": "Review",
              "author": review.author.split(',')[0],
              "reviewBody": review.content,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              }
            }))
          })
        }}
      />
    </>
  );
};

export default ReviewsSection;