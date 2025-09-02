import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? `opacity-100 translate-y-0 scale-100` 
          : `opacity-0 ${animation === 'slide-up' ? 'translate-y-8' : ''} ${animation === 'scale-in' ? 'scale-95' : ''}`
      } ${className}`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;