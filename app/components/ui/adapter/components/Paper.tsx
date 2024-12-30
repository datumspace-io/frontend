'use client';

import { Paper as MuiPaper } from '@mui/material';
import { createUIComponent } from '../UIAdapter';
import { cn } from '../../utils';

interface PaperProps {
  children: React.ReactNode;
  className?: string;
  elevation?: number;
  variant?: 'elevation' | 'outlined';
}

function MUIPaper({ className, ...props }: PaperProps) {
  return (
    <MuiPaper 
      className={cn(className)}
      {...props}
    />
  );
}

function RadixPaper({ className, children, ...props }: PaperProps) {
  // Radix implementation
  return null;
}

export const Paper = createUIComponent(MUIPaper, RadixPaper);