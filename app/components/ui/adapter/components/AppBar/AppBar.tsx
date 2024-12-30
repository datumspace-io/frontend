'use client';

import { AppBar as MuiAppBar } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { AppBarProps } from './types';
import { cn } from '../../../utils';

function MUIAppBar({ position = 'static', className, ...props }: AppBarProps) {
  return (
    <MuiAppBar 
      position={position}
      className={cn(className)}
      {...props}
    />
  );
}

function RadixAppBar({ position = 'static', className, children }: AppBarProps) {
  return (
    <header 
      className={cn(
        'bg-blue-900 text-white',
        position === 'fixed' && 'fixed top-0 left-0 right-0',
        className
      )}
    >
      {children}
    </header>
  );
}

export const AppBar = createUIComponent(MUIAppBar, RadixAppBar);