'use client';

import { ListItem as MuiListItem } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { cn } from '../../../utils';
import { ListItemProps } from './types';

function MUIListItem({ className, ...props }: ListItemProps) {
  return (
    <MuiListItem 
      className={cn(className)}
      {...props}
    />
  );
}

function RadixListItem({ className, children, onClick }: ListItemProps) {
  return (
    <li 
      className={cn('px-4 py-2 hover:bg-gray-50', className)}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export const ListItem = createUIComponent(MUIListItem, RadixListItem);