'use client';

import { createUIComponent } from '../UIAdapter';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

function MUIForm({ children, onSubmit, className }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

function RadixForm({ children, onSubmit, className }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

export const Form = createUIComponent(MUIForm, RadixForm);