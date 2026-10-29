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
  const baseStyles = 'rounded-xl transition-all duration-200 text-paper-ink relative overflow-hidden';
  
  let variantStyles = 'bg-cosmic-surface/75 backdrop-blur-md border border-white/[0.08] shadow-journal';
  if (variant === 'elevated') {
    variantStyles = 'bg-cosmic-elevated/80 backdrop-blur-lg border border-white/[0.1] shadow-journal-md';
  } else if (variant === 'sunken') {
    variantStyles = 'bg-cosmic-void/60 border border-white/[0.04] shadow-inner';
  } else if (variant === 'accent') {
    variantStyles = 'bg-cosmic-surface/85 backdrop-blur-md border border-accent/40 shadow-cosmic-glow';
  } else if (variant === 'glass') {
    variantStyles = 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] shadow-journal';
  } else if (variant === 'lined') {
    variantStyles = 'bg-cosmic-surface/75 backdrop-blur-md border border-white/[0.08] shadow-journal';
  }

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};
