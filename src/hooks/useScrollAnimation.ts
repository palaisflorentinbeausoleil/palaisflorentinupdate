import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export const useMultipleScrollAnimation = (itemsCount: number, options: UseScrollAnimationOptions = {}) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemsCount).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            if (options.triggerOnce !== false) {
              observer.unobserve(ref);
            }
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px 0px -50px 0px',
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [itemsCount, options]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  };

  return { setRef, visibleItems };
};