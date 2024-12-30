'use client';

import { Typography as MuiTypography } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
  component?: React.ElementType;
}

function MUITypography(props: TypographyProps) {
  return <MuiTypography {...props} />;
}

function RadixTypography({ children, variant = 'body1', component }: TypographyProps) {
  const Component = component || variant?.startsWith('h') ? variant : 'p';
  return <Component>{children}</Component>;
}

export const Typography = createUIComponent(MUITypography, RadixTypography);