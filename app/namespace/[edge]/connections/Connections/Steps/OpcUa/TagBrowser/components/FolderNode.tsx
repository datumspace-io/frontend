'use client';

interface FolderNodeProps {
  name: string;
  path: string;
  level: number;
}

export default function FolderNode({ name, path, level }: FolderNodeProps) {
  return (
    <div 
      className={`flex items-center gap-2 p-2 bg-gray-50 rounded-md hover:bg-gray-100`}
    >
      <span className="text-yellow-500">📁</span>
      <div>
        <span className="font-medium">{name}</span>
        <span className="text-gray-400 text-sm ml-2">{path}</span>
      </div>
    </div>
  );
}