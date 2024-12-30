'use client';

import { useUIComponent } from '../hooks/useUIComponent';
import { MUIInput } from './MUIInput';
import { RadixInput } from './RadixInput';
import type { InputProps } from '../types';

export function Input(props: InputProps) {
  const InputComponent = useUIComponent(MUIInput, RadixInput);
  return <InputComponent {...props} />;
}