'use client';

import { Select as MuiSelect, MenuItem, FormControl, InputLabel } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { SelectProps } from './types';
import { cn } from '../../../utils';

function MUISelect({ 
  label, 
  value, 
  onChange, 
  options, 
  error, 
  required,
  className 
}: SelectProps) {
  return (
    <FormControl 
      fullWidth 
      error={!!error} 
      required={required}
      className={cn(className)}
    >
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

function RadixSelect({ 
  label, 
  value, 
  onChange, 
  options, 
  error, 
  required,
  className 
}: SelectProps) {
  return (
    <div className={cn('space-y-1', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full px-3 py-2 border rounded-md',
          error ? 'border-red-500' : 'border-gray-300',
          'focus:outline-none focus:ring-1 focus:ring-blue-500'
        )}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export const Select = createUIComponent(MUISelect, RadixSelect);