'use client';

import { useUI } from './providers/UIProvider';
import { Button as MuiButton } from './mui/Button';
import { Button as RadixButton } from './radix/Button';
import type { ButtonProps } from './types';

export function Button(props: ButtonProps) {
  const { library } = useUI();
  return library === 'mui' ? <MuiButton {...props} /> : <RadixButton {...props} />;
}