import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral' | 'starlight';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center font-sans font-medium rounded-full tracking-wide backdrop-blur-sm';
  
  const sizeStyles = size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';

  let variantStyles = 'bg-white/[0.06] text-paper-secondary border border-white/[0.08]';
  if (variant === 'accent' || variant === 'starlight') {
    variantStyles = 'bg-accent/15 text-starlight-lavender border border-accent/30';
  } else if (variant === 'success') {
    variantStyles = 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30';
  } else if (variant === 'warning') {
    variantStyles = 'bg-amber-500/15 text-amber-300 border border-amber-500/30';
  } else if (variant === 'danger') {
    variantStyles = 'bg-rose-500/15 text-rose-300 border border-rose-500/30';
  } else if (variant === 'neutral') {
    variantStyles = 'bg-white/[0.04] text-paper-muted border border-white/[0.06]';
  }

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};
