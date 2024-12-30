'use client';

import { Box as MuiBox } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface BoxProps {
  children: React.ReactNode;
  component?: React.ElementType;
  sx?: Record<string, any>;
}

function MUIBox(props: BoxProps) {
  return <MuiBox {...props} />;
}

function RadixBox({ children, component: Component = 'div' }: BoxProps) {
  return <Component>{children}</Component>;
}

export const Box = createUIComponent(MUIBox, RadixBox);