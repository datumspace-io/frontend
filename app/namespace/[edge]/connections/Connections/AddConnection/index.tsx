import ConnectionTypeCard from './ConnectionTypeCard';
import { ConnectionType } from './types';

interface AddConnectionProps {
  onCancel: () => void;
}

export default function AddConnection({ onCancel }: AddConnectionProps) {
  const connectionTypes: ConnectionType[] = [
    { id: 'opcua', name: 'OPC UA', icon: 'connection-opcua', description: 'Connect to OPC UA servers and devices' },
    { id: 'mqtt', name: 'MQTT', icon: 'connection-mqtt', description: 'Connect to MQTT brokers and IoT devices' },
    { id: 'jdbc', name: 'JDBC', icon: 'connection-database', description: 'Connect to databases via JDBC' },
    { id: 'rest', name: 'REST API', icon: 'connection-api', description: 'Connect to REST API endpoints' },
    { id: 'csv', name: 'CSV File', icon: 'connection-file', description: 'Import data from CSV files' }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Add New Connection</h2>
          <p className="text-gray-600">Select a connection type to configure</p>
        </div>
        <button
          onClick={onCancel}
          className="text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {connectionTypes.map((type) => (
          <ConnectionTypeCard
            key={type.id}
            type={type}
            onClick={() => console.log('Selected:', type.id)}
          />
        ))}
      </div>
    </div>
  );
}