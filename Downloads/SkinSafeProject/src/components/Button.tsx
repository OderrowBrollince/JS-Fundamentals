import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/50 focus:ring-primary-500 hover:scale-105',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:shadow-lg hover:shadow-secondary-500/50 focus:ring-secondary-500 hover:scale-105',
    danger: 'bg-gradient-to-r from-danger-600 to-danger-700 text-white hover:shadow-lg hover:shadow-danger-500/50 focus:ring-danger-500 hover:scale-105',
    ghost: 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:bg-white hover:shadow-xl focus:ring-gray-400'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 gap-2 text-sm',
    md: 'px-6 py-3 gap-2',
    lg: 'px-8 py-4 gap-3'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {variant !== 'ghost' && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}