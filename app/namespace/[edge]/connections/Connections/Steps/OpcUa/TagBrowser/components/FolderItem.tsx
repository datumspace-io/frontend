'use client';

interface FolderItemProps {
  name: string;
  path: string;
}

export default function FolderItem({ name, path }: FolderItemProps) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
      <span className="text-yellow-500">📁</span>
      <div>
        <span className="font-medium">{name}</span>
        <span className="text-gray-400 text-sm ml-2">{path}</span>
      </div>
    </div>
  );
}