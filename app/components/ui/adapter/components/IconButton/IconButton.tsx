'use client';

import { IconButton as MuiIconButton } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { IconButtonProps } from './types';
import { cn } from '../../../utils';

function MUIIconButton({ className, ...props }: IconButtonProps) {
  return <MuiIconButton className={cn(className)} {...props} />;
}

function RadixIconButton({ 
  color = 'inherit', 
  size = 'medium', 
  className,
  children,
  onClick,
  disabled
}: IconButtonProps) {
  const sizeStyles = {
    small: 'p-1',
    medium: 'p-2',
    large: 'p-3'
  };

  const colorStyles = {
    inherit: 'text-current',
    primary: 'text-blue-600',
    secondary: 'text-gray-600'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-full hover:bg-black/5',
        sizeStyles[size],
        colorStyles[color],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
}

export const IconButton = createUIComponent(MUIIconButton, RadixIconButton);