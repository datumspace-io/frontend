'use client';

import { Dialog as MuiDialog, DialogTitle, DialogContent } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { DialogProps } from './types';
import { cn } from '../../../utils';

function MUIDialog({ open, onClose, title, children, className }: DialogProps) {
  return (
    <MuiDialog 
      open={open} 
      onClose={onClose}
      className={cn(className)}
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  );
}

function RadixDialog({ open, onClose, title, children, className }: DialogProps) {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className={cn(
          'bg-white rounded-lg shadow-xl w-full max-w-md',
          className
        )}>
          {title && (
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
          )}
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export const Dialog = createUIComponent(MUIDialog, RadixDialog);