import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  from = 'blue-600', 
  to = 'indigo-600',
  className = '' 
}) => {
  return (
    <span className={`bg-gradient-to-r from-${from} to-${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;