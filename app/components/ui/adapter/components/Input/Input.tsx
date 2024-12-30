'use client';

import { TextField } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { InputProps } from './types';
import { cn } from '../../../utils';

function MUIInput({ 
  label, 
  value, 
  onChange, 
  error, 
  className,
  ...props 
}: InputProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={!!error}
      helperText={error}
      className={cn(className)}
      fullWidth
      {...props}
    />
  );
}

function RadixInput({ 
  label, 
  value, 
  onChange, 
  error, 
  required,
  className,
  ...props 
}: InputProps) {
  return (
    <div className={cn('space-y-1', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full px-3 py-2 border rounded-md',
          error ? 'border-red-500' : 'border-gray-300',
          'focus:outline-none focus:ring-1 focus:ring-blue-500'
        )}
        required={required}
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export const Input = createUIComponent(MUIInput, RadixInput);