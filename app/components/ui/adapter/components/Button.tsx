'use client';

import { ButtonProps } from '../../types';
import { Button as MuiButton } from '@mui/material';
import { createUIComponent } from '../UIAdapter';
import { cn } from '../../utils';

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

function RadixButton({ variant = 'primary', size = 'medium', className, ...props }: ButtonProps) {
  // Radix implementation
  return null;
}

export const Button = createUIComponent(MUIButton, RadixButton);