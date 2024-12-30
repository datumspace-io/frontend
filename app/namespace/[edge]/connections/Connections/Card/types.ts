```typescript
export type ConnectionType = 'opcua' | 'mqtt' | 'jdbc';
export type ConnectionStatusType = 'connected' | 'disconnected' | 'error';

export interface ConnectionCardProps {
  title: string;
  type: ConnectionType;
  status?: ConnectionStatusType;
  description?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}
```