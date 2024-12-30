'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { DialogProps } from '../types';

export function RadixDialog({ open, onClose, title, children, className }: DialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 ${className}`}>
          {title && (
            <Dialog.Title className="text-lg font-medium mb-4">
              {title}
            </Dialog.Title>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}