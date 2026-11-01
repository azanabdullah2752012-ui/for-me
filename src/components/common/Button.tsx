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

  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-40 disabled:cursor-not-allowed select-none';

  let sizeStyles = 'px-3.5 py-1.5 text-xs gap-1.5';
  if (size === 'md') sizeStyles = 'px-4 py-2 text-sm gap-2';
  if (size === 'lg') sizeStyles = 'px-5 py-2.5 text-base gap-2.5';

  let variantStyles = 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-md active:translate-y-px';
  if (variant === 'starlight' || variant === 'primary') {
    variantStyles = 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-md active:translate-y-px';
  } else if (variant === 'secondary') {
    variantStyles = 'bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/[0.1]';
  } else if (variant === 'outline') {
    variantStyles = 'bg-transparent text-zinc-300 hover:text-white hover:bg-white/[0.04] border border-white/[0.1]';
  } else if (variant === 'ghost') {
    variantStyles = 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04]';
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
