'use client';

import { Select as MuiSelect, MenuItem, FormControl, InputLabel } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  error?: string;
  required?: boolean;
  className?: string;
}

function MUISelect({ label, value, onChange, options, error, required, className }: SelectProps) {
  return (
    <FormControl fullWidth error={!!error} required={required} className={className}>
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

function RadixSelect({ label, value, onChange, options, error, required, className }: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={`w-full px-3 py-2 border rounded-md ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:ring-1 focus:ring-blue-500`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

export const Select = createUIComponent(MUISelect, RadixSelect);