'use client';

import { TreeNode } from './types';

interface TreeViewNodeProps {
  node: TreeNode;
  level: number;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onSelect: () => void;
}

export function TreeViewNode({
  node,
  level,
  isExpanded,
  isSelected,
  onToggle,
  onSelect,
}: TreeViewNodeProps) {
  const hasChildren = node.children && node.children.length > 0;
  const isTablespace = node.type === 'tablespace';

  return (
    <div
      className={`ml-${level * 4} cursor-pointer`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
        if (hasChildren) onToggle();
      }}
    >
      <div className={`flex items-center py-1 px-2 rounded-md ${
        isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}>
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
        <span className="mr-2">
          {isTablespace ? '📊' : '📁'}
        </span>
        <span>{node.label}</span>
      </div>
    </div>
  );
}