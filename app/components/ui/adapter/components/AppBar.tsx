'use client';

import { AppBar as MuiAppBar } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface AppBarProps {
  children: React.ReactNode;
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
}

function MUIAppBar(props: AppBarProps) {
  return <MuiAppBar {...props} />;
}

function RadixAppBar({ children }: AppBarProps) {
  return <div className="bg-blue-900 text-white">{children}</div>;
}

export const AppBar = createUIComponent(MUIAppBar, RadixAppBar);