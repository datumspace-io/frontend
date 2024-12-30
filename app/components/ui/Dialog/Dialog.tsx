'use client';

import { useUIComponent } from '../hooks/useUIComponent';
import { MUIDialog } from './MUIDialog';
import { RadixDialog } from './RadixDialog';
import type { DialogProps } from '../types';

export function Dialog(props: DialogProps) {
  const DialogComponent = useUIComponent(MUIDialog, RadixDialog);
  return <DialogComponent {...props} />;
}