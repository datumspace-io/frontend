'use client';

import Link from 'next/link';
import PageLayout from '../../../components/Layout/PageLayout';
import ConnectionTypeCard from '../../../components/Connections/AddConnection/ConnectionTypeCard';
import { ConnectionType } from '../../../components/Connections/AddConnection/types';

interface AddConnectionPageProps {
  params: {
    edge: string;
  };
}

export default function AddConnectionPage({ params }: AddConnectionPageProps) {
  const connectionTypes: ConnectionType[] = [
    { id: 'opcua', name: 'OPC UA', icon: 'connection-opcua', description: 'Connect to OPC UA servers and devices' },
    { id: 'mqtt', name: 'MQTT', icon: 'connection-mqtt', description: 'Connect to MQTT brokers and IoT devices' },
    { id: 'jdbc', name: 'JDBC', icon: 'connection-database', description: 'Connect to databases via JDBC' },
    { id: 'rest', name: 'REST API', icon: 'connection-api', description: 'Connect to REST API endpoints' },
    { id: 'csv', name: 'CSV File', icon: 'connection-file', description: 'Import data from CSV files' }
  ];

  return (
    <PageLayout>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href={`/${params.edge}/connections`}
            className="text-blue-600 hover:text-blue-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-2xl font-semibold">Add New Connection</h1>
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
    </PageLayout>
  );
}