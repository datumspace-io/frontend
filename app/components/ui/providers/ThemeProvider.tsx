'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useUI } from './UIProvider';
import { muiTheme } from '../theme/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { library } = useUI();

  if (library === 'mui') {
    return <MUIThemeProvider theme={muiTheme}>{children}</MUIThemeProvider>;
  }

  return <>{children}</>;
}