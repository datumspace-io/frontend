import { ConnectionType } from './types';
import ConnectionIcon from './ConnectionIcon';

interface ConnectionOptionProps {
  type: ConnectionType;
  onClick: () => void;
}

export default function ConnectionOption({ type, onClick }: ConnectionOptionProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-sm transition-all"
    >
      <ConnectionIcon type={type.icon} />
      <span className="mt-2 font-medium">{type.name}</span>
    </button>
  );
}