interface EdgeStatusBadgeProps {
  status: 'online' | 'offline';
}

export default function EdgeStatusBadge({ status }: EdgeStatusBadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-sm ${
      status === 'online' 
        ? 'bg-green-100 text-green-800' 
        : 'bg-red-100 text-red-800'
    }`}>
      {status}
    </span>
  );
}