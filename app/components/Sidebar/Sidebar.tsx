'use client';

import { Paper, List } from '@/components/ui/adapter';
import EdgeItem from './EdgeItem';

export default function Sidebar() {
  return (
    <Paper 
      variant="outlined" 
      sx={{ 
        width: 256,
        borderRadius: 0,
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0
      }}
    >
      <List>
        <EdgeItem name="Edge Device A" />
        <EdgeItem name="Edge Device B" />
        <EdgeItem name="Edge Device C" />
      </List>
    </Paper>
  );
}