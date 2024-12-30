'use client';

import { Paper as MuiPaper } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { PaperProps } from './types';
import { cn } from '../../../utils';

function MUIPaper({ className, ...props }: PaperProps) {
  return <MuiPaper className={cn(className)} {...props} />;
}

function RadixPaper({ 
  variant = 'elevation', 
  elevation = 1,
  className,
  children 
}: PaperProps) {
  return (
    <div 
      className={cn(
        'bg-white rounded-lg',
        variant === 'outlined' ? 'border border-gray-200' : `shadow-${elevation}`,
        className
      )}
    >
      {children}
    </div>
  );
}

export const Paper = createUIComponent(MUIPaper, RadixPaper);