```tsx
'use client';

import { ConnectionStatusType } from './types';

interface ConnectionStatusProps {
  status: ConnectionStatusType;
}

export function ConnectionStatus({ status }: ConnectionStatusProps) {
  const statusStyles = {
    connected: 'bg-green-100 text-green-800',
    disconnected: 'bg-red-100 text-red-800',
    error: 'bg-orange-100 text-orange-800'
  };

  const statusLabels = {
    connected: 'Connected',
    disconnected: 'Disconnected',
    error: 'Error'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      <span className={`w-1.5 h-1.5 mr-1.5 rounded-full bg-current`} />
      {statusLabels[status]}
    </span>
  );
}
```