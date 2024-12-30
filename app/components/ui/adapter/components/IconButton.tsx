'use client';

import { IconButton as MuiIconButton } from '@mui/material';
import { createUIComponent } from '../UIAdapter';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'inherit' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

function MUIIconButton(props: IconButtonProps) {
  return <MuiIconButton {...props} />;
}

function RadixIconButton({ children, onClick, color = 'inherit', size = 'medium' }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full p-2 hover:bg-opacity-20 hover:bg-white
        ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'}
        ${color === 'inherit' ? 'text-current' : `text-${color}`}
      `}
    >
      {children}
    </button>
  );
}

export const IconButton = createUIComponent(MUIIconButton, RadixIconButton);