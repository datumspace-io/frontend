'use client';

import { Dialog as MuiDialog, DialogTitle, DialogContent } from '@mui/material';
import type { DialogProps } from '../types';

export function MUIDialog({ open, onClose, title, children, className }: DialogProps) {
  return (
    <MuiDialog open={open} onClose={onClose} className={className}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  );
}