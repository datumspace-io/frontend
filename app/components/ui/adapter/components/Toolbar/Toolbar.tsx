'use client';

import { Toolbar as MuiToolbar } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { ToolbarProps } from './types';
import { cn } from '../../../utils';

function MUIToolbar({ className, ...props }: ToolbarProps) {
  return (
    <MuiToolbar 
      className={cn(className)}
      {...props}
    />
  );
}

function RadixToolbar({ className, children }: ToolbarProps) {
  return (
    <div className={cn(
      'flex items-center min-h-[64px] px-4',
      className
    )}>
      {children}
    </div>
  );
}

export const Toolbar = createUIComponent(MUIToolbar, RadixToolbar);