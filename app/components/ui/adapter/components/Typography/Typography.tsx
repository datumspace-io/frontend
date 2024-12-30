'use client';

import { Typography as MuiTypography } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { TypographyProps } from './types';
import { cn } from '../../../utils';

function MUITypography({ className, ...props }: TypographyProps) {
  return (
    <MuiTypography 
      className={cn(className)}
      {...props}
    />
  );
}

function RadixTypography({ 
  variant = 'body1', 
  component,
  className,
  children 
}: TypographyProps) {
  const Component = component || (variant?.startsWith('h') ? variant : 'p');
  const variantStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    body1: 'text-base',
    body2: 'text-sm',
    subtitle1: 'text-base font-medium',
    subtitle2: 'text-sm font-medium',
  };

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}

export const Typography = createUIComponent(MUITypography, RadixTypography);