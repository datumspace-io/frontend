'use client';

import { TextField as MuiTextField } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface TextFieldProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
  rows?: number;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

function MUITextField({ onChange, error, ...props }: TextFieldProps) {
  return (
    <MuiTextField
      {...props}
      onChange={(e) => onChange(e.target.value)}
      error={!!error}
      helperText={error}
      fullWidth
    />
  );
}

function RadixTextField({ 
  label, 
  value, 
  onChange, 
  type = 'text',
  multiline,
  rows,
  error,
  required,
  placeholder,
  className 
}: TextFieldProps) {
  const Component = multiline ? 'textarea' : 'input';
  
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Component
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className={`w-full px-3 py-2 border rounded-md ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-1 focus:ring-blue-500`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export const TextField = createUIComponent(MUITextField, RadixTextField);