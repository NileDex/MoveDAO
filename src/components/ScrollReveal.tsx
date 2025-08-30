import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  distance?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 800,
  className = '',
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getInitialStyle = () => {
    const baseStyle: React.CSSProperties = {
      transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      willChange: 'transform, opacity',
    };

    if (!isVisible) {
      switch (direction) {
        case 'up':
          return {
            ...baseStyle,
            opacity: 0,
            transform: `translateY(${distance}px)`,
          };
        case 'down':
          return {
            ...baseStyle,
            opacity: 0,
            transform: `translateY(-${distance}px)`,
          };
        case 'left':
          return {
            ...baseStyle,
            opacity: 0,
            transform: `translateX(${distance}px)`,
          };
        case 'right':
          return {
            ...baseStyle,
            opacity: 0,
            transform: `translateX(-${distance}px)`,
          };
        case 'scale':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'scale(0.8)',
          };
        case 'rotate':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'rotateY(45deg) scale(0.8)',
          };
        default:
          return {
            ...baseStyle,
            opacity: 0,
            transform: `translateY(${distance}px)`,
          };
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1) rotateY(0)',
    };
  };

  return (
    <div ref={elementRef} className={className} style={getInitialStyle()}>
      {children}
    </div>
  );
};

export default ScrollReveal;