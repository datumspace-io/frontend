'use client';

import { Box as MuiBox } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { BoxProps } from './types';
import { cn } from '../../../utils';

function MUIBox({ className, ...props }: BoxProps) {
  return <MuiBox className={cn(className)} {...props} />;
}

function RadixBox({ component: Component = 'div', className, children }: BoxProps) {
  return <Component className={cn(className)}>{children}</Component>;
}

export const Box = createUIComponent(MUIBox, RadixBox);