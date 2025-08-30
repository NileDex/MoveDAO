import React, { useEffect, useRef, useState } from 'react';

interface FeatureRevealProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const FeatureReveal: React.FC<FeatureRevealProps> = ({
  children,
  index,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const elementRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate particles
    const particleArray = [];
    for (let i = 0; i < 12; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 600,
      });
    }
    setParticles(particleArray);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 200); // Stagger animation based on card index
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px',
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
  }, [index]);

  const getCardStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      transition: 'all 1000ms cubic-bezier(0.23, 1, 0.32, 1)',
      willChange: 'transform, opacity, filter',
      position: 'relative',
      overflow: 'hidden',
    };

    if (!isVisible) {
      return {
        ...baseStyle,
        opacity: 0,
        transform: 'translateY(80px) rotateX(15deg) scale(0.9)',
        filter: 'blur(8px)',
      };
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translateY(0) rotateX(0) scale(1)',
      filter: 'blur(0px)',
    };
  };

  const getParticleStyle = (particle: { x: number; y: number; delay: number }): React.CSSProperties => {
    return {
      position: 'absolute',
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #ffc30d, #b80af7)',
      opacity: isVisible ? 0 : 1,
      transform: isVisible ? 'translateY(-50px) scale(0)' : 'translateY(0) scale(1)',
      transition: `all 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${particle.delay}ms`,
      pointerEvents: 'none',
      zIndex: 1,
    };
  };

  const getGlowStyle = (): React.CSSProperties => {
    return {
      position: 'absolute',
      inset: '-2px',
      background: 'linear-gradient(45deg, transparent, rgba(255, 195, 13, 0.1), rgba(184, 10, 247, 0.1), transparent)',
      borderRadius: 'inherit',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.8)',
      transition: 'all 1200ms cubic-bezier(0.23, 1, 0.32, 1) 400ms',
      pointerEvents: 'none',
      zIndex: 0,
      filter: 'blur(20px)',
    };
  };

  const getContentStyle = (): React.CSSProperties => {
    return {
      position: 'relative',
      zIndex: 2,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 800ms cubic-bezier(0.23, 1, 0.32, 1) 600ms',
    };
  };

  return (
    <div ref={elementRef} className={className}>
      <div ref={cardRef} style={getCardStyle()}>
        {/* Glow effect */}
        <div style={getGlowStyle()} />
        
        {/* Particles */}
        {particles.map((particle) => (
          <div key={particle.id} style={getParticleStyle(particle)} />
        ))}
        
        {/* Content */}
        <div style={getContentStyle()}>
          {children}
        </div>
        
        {/* Shimmer effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            transform: isVisible ? 'translateX(200%)' : 'translateX(-100%)',
            transition: 'transform 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 800ms',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
      </div>
    </div>
  );
};

export default FeatureReveal;