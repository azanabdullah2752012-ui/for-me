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
  const baseStyles = 'inline-flex items-center font-sans font-medium rounded-md tracking-normal';
  
  const sizeStyles = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  let variantStyles = 'bg-white/[0.05] text-zinc-300 border border-white/[0.07]';
  if (variant === 'accent' || variant === 'starlight') {
    variantStyles = 'bg-accent/15 text-zinc-300 border border-white/[0.12]';
  } else if (variant === 'success') {
    variantStyles = 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25';
  } else if (variant === 'warning') {
    variantStyles = 'bg-amber-500/15 text-amber-300 border border-amber-500/25';
  } else if (variant === 'danger') {
    variantStyles = 'bg-rose-500/15 text-rose-300 border border-rose-500/25';
  } else if (variant === 'neutral') {
    variantStyles = 'bg-white/[0.03] text-zinc-400 border border-white/[0.05]';
  }

  return (
    <span className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};
