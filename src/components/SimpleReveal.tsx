import React, { useEffect, useRef, useState } from 'react';

interface SimpleRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const SimpleReveal: React.FC<SimpleRevealProps> = ({
  children,
  delay = 0,
  className = '',
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
        threshold: 0.2,
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
  }, [delay]);

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
};

export default SimpleReveal;