'use client';

import { SelectedTag } from '../../types';

interface TagItemProps {
  tag: SelectedTag;
  onRemove: (id: string) => void;
}

export default function TagItem({ tag, onRemove }: TagItemProps) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
      <div className="flex items-center gap-2">
        <span className="text-blue-500">🏷️</span>
        <span>{tag.name}</span>
        <span className="text-gray-400 text-sm">{tag.path}</span>
      </div>
      <button
        onClick={() => onRemove(tag.id)}
        className="text-gray-400 hover:text-gray-600"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}