import React, { memo } from 'react';

export const Button = memo(function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-forsythia/40 font-sans';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-brand-forsythia to-brand-saffron text-brand-oceanic font-semibold hover:shadow-lg hover:shadow-brand-forsythia/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transform transition-all',
    secondary: 'glass-panel text-brand-arctic border-premium hover:bg-brand-nocturnal/20 hover:-translate-y-0.5 active:translate-y-0 transform transition-all',
    outline: 'border border-brand-mint/20 hover:border-brand-mint/50 text-brand-mint hover:bg-brand-mint/5 px-4 py-2 rounded-md transition-all',
    ghost: 'text-brand-arctic hover:bg-brand-nocturnal/10 hover:text-brand-mint'
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

