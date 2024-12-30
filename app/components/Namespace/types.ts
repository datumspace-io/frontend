export interface Edge {
  id: string;
  name: string;
  status: 'online' | 'offline';
  description?: string;
}