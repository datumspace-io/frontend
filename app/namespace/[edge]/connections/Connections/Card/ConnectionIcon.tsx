```tsx
'use client';

import { ConnectionType } from './types';

interface ConnectionIconProps {
  type: ConnectionType;
}

export function ConnectionIcon({ type }: ConnectionIconProps) {
  const iconMap = {
    opcua: (
      <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    mqtt: (
      <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    jdbc: (
      <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 15h16" />
      </svg>
    )
  };

  return iconMap[type] || null;
}
```