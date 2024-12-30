'use client';

import { TagNode } from '../../types';

interface TreeNodeProps {
  node: TagNode;
  level: number;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onSelect: () => void;
  onDragStart: (e: React.DragEvent) => void;
}

export default function TreeNode({
  node,
  level,
  isExpanded,
  isSelected,
  onToggle,
  onSelect,
  onDragStart
}: TreeNodeProps) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div 
      draggable={true}
      onDragStart={onDragStart}
      className={`ml-${level * 4}`}
    >
      <div
        className={`flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer ${
          isSelected ? 'bg-blue-50' : ''
        }`}
        onClick={() => {
          if (hasChildren) {
            onToggle();
          }
          onSelect();
        }}
      >
        {hasChildren && (
          <svg 
            className={`w-4 h-4 mr-1 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
        <span className={`mr-2 ${node.type === 'folder' ? 'text-yellow-500' : 'text-blue-500'}`}>
          {node.type === 'folder' ? '📁' : '🏷️'}
        </span>
        <span>{node.name}</span>
      </div>
    </div>
  );
}