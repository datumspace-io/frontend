import Link from 'next/link';
import { Paper, Typography } from '@/components/ui/adapter';
import EdgeIcon from '../Icons/EdgeIcon';
import EdgeStatusBadge from './EdgeStatusBadge';
import { Edge } from './types';

interface EdgeCardProps {
  edge: Edge;
}

export default function EdgeCard({ edge }: EdgeCardProps) {
  return (
    <Link href={`/${edge.name.toLowerCase()}`}>
      <Paper
        sx={{
          p: 3,
          textAlign: 'center',
          transition: 'box-shadow 0.2s',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: 3
          }
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-blue-600 mb-4">
            <EdgeIcon />
          </div>
          <Typography variant="h6" gutterBottom>
            {edge.name}
          </Typography>
          <EdgeStatusBadge status={edge.status} />
          {edge.description && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              {edge.description}
            </Typography>
          )}
        </div>
      </Paper>
    </Link>
  );
}