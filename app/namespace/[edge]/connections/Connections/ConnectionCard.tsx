interface ConnectionCardProps {
  title: string;
  type: 'opcua' | 'mqtt' | 'jdbc';
}

export default function ConnectionCard({ title, type }: ConnectionCardProps) {
  return (
    <div className="connection-card">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
      <p className="text-gray-600 text-sm mb-4">Connected to remote endpoint</p>
      <span className={`tag tag-${type}`}>{type.toUpperCase()}</span>
    </div>
  );
}