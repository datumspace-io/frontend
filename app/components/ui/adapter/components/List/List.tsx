'use client';

import { List as MuiList } from '@mui/material';
import { createUIComponent } from '../../UIAdapter';
import { cn } from '../../../utils';
import { ListProps } from './types';

function MUIList({ className, ...props }: ListProps) {
  return (
    <MuiList 
      className={cn(className)}
      {...props}
    />
  );
}

function RadixList({ className, children }: ListProps) {
  return <ul className={cn('list-none p-0 m-0', className)}>{children}</ul>;
}

export const List = createUIComponent(MUIList, RadixList);