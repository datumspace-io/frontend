'use client';

import { TextField } from '@mui/material';
import type { InputProps } from '../types';

export function MUIInput({ value, onChange, label, error, ...props }: InputProps) {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      error={!!error}
      helperText={error}
      fullWidth
      {...props}
    />
  );
}