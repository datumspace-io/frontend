```tsx
'use client';

import { ConnectionIcon } from './ConnectionIcon';
import { ConnectionStatus } from './ConnectionStatus';
import { ConnectionMenu } from './ConnectionMenu';
import { ConnectionCardProps } from './types';
import { Paper } from '@/components/ui/adapter';

export function ConnectionCard({ 
  title, 
  type,
  status = 'connected',
  description,
  onEdit,
  onDelete 
}: ConnectionCardProps) {
  return (
    <Paper className="p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <ConnectionIcon type={type} />
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            {description && (
              <p className="text-sm text-gray-600">{description}</p>
            )}
          </div>
        </div>
        <ConnectionMenu onEdit={onEdit} onDelete={onDelete} />
      </div>
      <ConnectionStatus status={status} />
    </Paper>
  );
}
```