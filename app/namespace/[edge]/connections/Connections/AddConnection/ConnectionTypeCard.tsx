import Link from 'next/link';
import { ConnectionType } from './types';
import ConnectionIcon from './ConnectionIcon';

interface ConnectionTypeCardProps {
  type: ConnectionType;
  onClick: () => void;
  edgeName?: string;
}

export default function ConnectionTypeCard({ type, edgeName }: ConnectionTypeCardProps) {
  return (
    <Link href={`/${edgeName}/connections/add/${type.id}`}>
      <div className="flex items-start p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition-all text-left w-full">
        <div className="mr-4">
          <ConnectionIcon type={type.icon} />
        </div>
        <div>
          <h3 className="font-medium text-lg mb-1">{type.name}</h3>
          <p className="text-gray-600 text-sm">{type.description}</p>
        </div>
      </div>
    </Link>
  );
}