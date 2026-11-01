import React from 'react';
import { sound } from '../../audio/sound';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'starlight';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled,
  children,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    sound.tick();
    onClick?.(e);
  };

  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:opacity-40 disabled:cursor-not-allowed select-none';

  let sizeStyles = 'px-3 py-1.5 text-xs gap-1.5';
  if (size === 'md') sizeStyles = 'px-4 py-2 text-sm gap-2';
  if (size === 'lg') sizeStyles = 'px-5 py-2.5 text-base gap-2.5';

  let variantStyles = 'bg-accent text-white hover:bg-accent-hover shadow-sm active:translate-y-px';
  if (variant === 'starlight') {
    variantStyles = 'bg-accent text-white hover:bg-accent-hover shadow-sm active:translate-y-px';
  } else if (variant === 'secondary') {
    variantStyles = 'bg-white/[0.05] hover:bg-white/[0.09] text-paper-ink border border-white/[0.08]';
  } else if (variant === 'outline') {
    variantStyles = 'bg-transparent text-paper-secondary hover:text-paper-ink hover:bg-white/[0.04] border border-white/[0.09]';
  } else if (variant === 'ghost') {
    variantStyles = 'bg-transparent text-paper-muted hover:text-paper-ink hover:bg-white/[0.04]';
  } else if (variant === 'danger') {
    variantStyles = 'bg-rose-500/15 text-rose-300 hover:bg-rose-500/25 border border-rose-500/25';
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
