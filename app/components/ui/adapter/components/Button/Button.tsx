'use client';

import { Button as MuiButton } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { ButtonProps } from './types';
import { cn } from '../../../utils';

function MUIButton({ variant = 'primary', size = 'medium', className, ...props }: ButtonProps) {
  const muiVariant = variant === 'text' ? 'text' : 'contained';
  
  return (
    <MuiButton
      variant={muiVariant}
      size={size}
      className={cn(className)}
      {...props}
    />
  );
}

function RadixButton({ 
  variant = 'primary', 
  size = 'medium', 
  className,
  children,
  disabled,
  onClick 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-colors';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    text: 'text-blue-600 hover:bg-blue-50'
  };
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export const Button = createUIComponent(MUIButton, RadixButton);