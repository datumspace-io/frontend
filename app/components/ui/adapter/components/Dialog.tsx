'use client';

import { Dialog as MuiDialog, DialogTitle, DialogContent } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

function MUIDialog({ open, onClose, title, children }: DialogProps) {
  return (
    <MuiDialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  );
}

function RadixDialog({ open, onClose, title, children }: DialogProps) {
  return (
    <div className={`fixed inset-0 ${open ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6">
        {title && <h2 className="text-lg font-medium mb-4">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export const Dialog = createUIComponent(MUIDialog, RadixDialog);