'use client';

import { Box, Paper, Typography, Divider } from '@mui/material';
import { useTagSpace } from '../context/TagSpaceContext';
import { TagSpaceNode } from '../types';
import { TagSpaceTree } from '../components/TagSpaceTree';
import { TableSpace } from '../components/TableSpace';

interface TagSpaceLayoutProps {
  nodes: TagSpaceNode[];
}

export function TagSpaceLayout({ nodes }: TagSpaceLayoutProps) {
  const { selectedNode } = useTagSpace();

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{ 
          width: 256, 
          borderRadius: 0,
          borderTop: 0,
          borderBottom: 0,
          borderLeft: 0
        }}
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">TagSpace</Typography>
        </Box>
        <TagSpaceTree nodes={nodes} />
      </Paper>
      
      <Box sx={{ flex: 1, overflow: 'auto' }}>
        {selectedNode?.type === 'tablespace' ? (
          <TableSpace tablespaceId={selectedNode.id} />
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <Typography color="text.secondary">
              Select a TableSpace to view or create tags
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}