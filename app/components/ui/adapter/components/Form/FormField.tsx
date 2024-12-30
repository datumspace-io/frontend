'use client';

import { createUIComponent } from '../../UIAdapter';
import { FormFieldProps } from './types';

function MUIFormField({ label, error, children, required }: FormFieldProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

function RadixFormField({ label, error, children, required }: FormFieldProps) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export const FormField = createUIComponent(MUIFormField, RadixFormField);