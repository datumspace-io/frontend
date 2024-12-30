'use client';

import { List, ListItem, Paper, Typography, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tag } from '../types';

interface TagListProps {
  tags: Tag[];
  onDelete: (id: string) => void;
  onEdit: (tag: Tag) => void;
}

export function TagList({ tags, onDelete, onEdit }: TagListProps) {
  return (
    <List>
      {tags.map(tag => (
        <ListItem
          key={tag.id}
          component={Paper}
          variant="outlined"
          sx={{ mb: 1, p: 2, display: 'flex', justifyContent: 'space-between' }}
        >
          <Box>
            <Typography variant="subtitle1">{tag.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              Type: {tag.dataType}
              {tag.description && ` • ${tag.description}`}
            </Typography>
          </Box>
          <Box>
            <IconButton
              size="small"
              onClick={() => onEdit(tag)}
              sx={{ mr: 1 }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => onDelete(tag.id)}
              color="error"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}