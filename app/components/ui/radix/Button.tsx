'use client';

import * as RadixButton from '@radix-ui/react-button';
import { ButtonProps } from '../types';

export function Button({ variant = 'primary', size = 'medium', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    text: 'text-blue-600 hover:bg-blue-50'
  };
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <RadixButton.Root
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${props.className || ''}
      `}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </RadixButton.Root>
  );
}