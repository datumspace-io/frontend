import { Edge } from './types';
import EdgeCard from './EdgeCard';

const edges: Edge[] = [
  { 
    id: 'edge-a',
    name: 'Edge Device A',
    status: 'online',
    description: 'Primary edge device'
  },
  { 
    id: 'edge-b',
    name: 'Edge Device B',
    status: 'online',
    description: 'Secondary edge device'
  },
  { 
    id: 'edge-c',
    name: 'Edge Device C',
    status: 'online',
    description: 'Backup edge device'
  }
];

export default function EdgeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {edges.map((edge) => (
        <EdgeCard 
          key={edge.id}
          edge={edge}
        />
      ))}
    </div>
  );
}