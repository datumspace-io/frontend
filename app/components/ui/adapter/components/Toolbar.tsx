'use client';

import { Toolbar as MuiToolbar } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface ToolbarProps {
  children: React.ReactNode;
}

function MUIToolbar(props: ToolbarProps) {
  return <MuiToolbar {...props} />;
}

function RadixToolbar({ children }: ToolbarProps) {
  return <div className="flex items-center min-h-[64px] px-4">{children}</div>;
}

export const Toolbar = createUIComponent(MUIToolbar, RadixToolbar);