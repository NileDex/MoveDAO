import React from 'react';

interface FeatureRevealProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const FeatureReveal: React.FC<FeatureRevealProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default FeatureReveal;