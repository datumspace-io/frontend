'use client';

import { createUIComponent } from '../../UIAdapter';
import { FormProps } from './types';
import { cn } from '../../../utils';

function MUIForm({ className, onSubmit, children }: FormProps) {
  return (
    <form 
      onSubmit={onSubmit}
      className={cn(className)}
    >
      {children}
    </form>
  );
}

function RadixForm({ className, onSubmit, children }: FormProps) {
  return (
    <form 
      onSubmit={onSubmit}
      className={cn(className)}
    >
      {children}
    </form>
  );
}

export const Form = createUIComponent(MUIForm, RadixForm);