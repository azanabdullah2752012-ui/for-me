import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'sunken' | 'accent' | 'lined' | 'glass';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-150 text-white relative';
  
  let variantStyles = 'bg-cosmic-surface border border-white/[0.07] shadow-sm';
  if (variant === 'elevated') {
    variantStyles = 'bg-cosmic-elevated border border-white/[0.09] shadow-md';
  } else if (variant === 'sunken') {
    variantStyles = 'bg-black/35 border border-white/[0.04] shadow-inner';
  } else if (variant === 'accent') {
    variantStyles = 'bg-cosmic-surface border border-white/[0.2]/35 shadow-sm';
  } else if (variant === 'glass') {
    variantStyles = 'bg-cosmic-surface border border-white/[0.07] shadow-sm';
  } else if (variant === 'lined') {
    variantStyles = 'bg-cosmic-surface border border-white/[0.07] shadow-sm';
  }

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
