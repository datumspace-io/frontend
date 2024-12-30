import { useState } from 'react';
import ConnectionOption from './ConnectionOption';
import { ConnectionType } from './types';
import Modal from '../../UI/Modal';

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectionModal({ isOpen, onClose }: ConnectionModalProps) {
  const [selectedType, setSelectedType] = useState<ConnectionType | null>(null);

  const connectionTypes: ConnectionType[] = [
    { id: 'opcua', name: 'OPC UA', icon: 'connection-opcua' },
    { id: 'mqtt', name: 'MQTT', icon: 'connection-mqtt' },
    { id: 'jdbc', name: 'JDBC', icon: 'connection-database' },
    { id: 'rest', name: 'REST API', icon: 'connection-api' },
    { id: 'csv', name: 'CSV File', icon: 'connection-file' }
  ];

  const handleOptionClick = (type: ConnectionType) => {
    setSelectedType(type);
    // TODO: Navigate to specific connection setup form
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Connection - CoreEdge">
      <div className="grid grid-cols-2 gap-4 p-4">
        {connectionTypes.map((type) => (
          <ConnectionOption
            key={type.id}
            type={type}
            onClick={() => handleOptionClick(type)}
          />
        ))}
      </div>
    </Modal>
  );
}