'use client';

import { List as MuiList, ListItem as MuiListItem } from '@mui/material';
import { createUIComponent } from '../UIAdapter';
import { cn } from '../../utils';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function MUIList({ className, ...props }: ListProps) {
  return (
    <MuiList 
      className={cn(className)}
      {...props}
    />
  );
}

function MUIListItem({ className, ...props }: ListItemProps) {
  return (
    <MuiListItem 
      className={cn(className)}
      {...props}
    />
  );
}

function RadixList({ className, children }: ListProps) {
  // Radix implementation
  return null;
}

function RadixListItem({ className, children }: ListItemProps) {
  // Radix implementation
  return null;
}

export const List = createUIComponent(MUIList, RadixList);
export const ListItem = createUIComponent(MUIListItem, RadixListItem);