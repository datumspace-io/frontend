'use client';

import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '../types';

export function Button({ variant = 'primary', size = 'medium', ...props }: ButtonProps) {
  const muiVariant = variant === 'text' ? 'text' : 'contained';
  
  return (
    <MuiButton
      variant={muiVariant}
      size={size}
      disabled={props.disabled}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </MuiButton>
  );
}