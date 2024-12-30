'use client';

import PageLayout from '@/components/Layout/PageLayout';
import Link from 'next/link';
import ConnectionsList from './Connections/ConnectionsList';


interface ConnectionsPageProps {
  params: {
    edge: string;
  };
}

export default function ConnectionsPage({ params }: ConnectionsPageProps) {
  const edgeName = params.edge.charAt(0).toUpperCase() + params.edge.slice(1);
  
  return (
    <PageLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">{edgeName} Connections</h1>
          <Link 
            href={`/${params.edge}/connections/add`}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Connection
          </Link>
        </div>
        <ConnectionsList />
      </div>
    </PageLayout>
  );
}