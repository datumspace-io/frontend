'use client';

import { useState } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Tag } from '../types';
import { TagList } from './TagList';
import { TagForm } from './TagForm';
import { useTagSpace } from '../context/TagSpaceContext';

interface TableSpaceProps {
  tablespaceId: string;
}

export function TableSpace({ tablespaceId }: TableSpaceProps) {
  const { tags, createTag, updateTag, deleteTag } = useTagSpace();
  const [showForm, setShowForm] = useState(false);

  const tablespaceTags = tags.filter(tag => tag.tablespaceId === tablespaceId);

  return (
    <Paper sx={{ m: 3, p: 3 }} variant="outlined">
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3
      }}>
        <Typography variant="h6">Tags</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setShowForm(true)}
        >
          Add Tag
        </Button>
      </Box>

      <TagList tags={tablespaceTags} onDelete={deleteTag} onEdit={updateTag} />

      {showForm && (
        <TagForm
          onSubmit={(tagData) => {
            createTag({ ...tagData, tablespaceId });
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}
    </Paper>
  );
}