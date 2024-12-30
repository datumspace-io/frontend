'use client';

import { useState } from 'react';
import { TagNode } from '../types';
import TreeNode from './components/TreeNode';
import { collectNestedTags, getNodePath } from './utils/tagUtils';

interface TagTreeProps {
  nodes: TagNode[];
  onSelect: (node: TagNode) => void;
  selectedNodes: Set<string>;
  onSelectedNodesChange: (nodes: Set<string>) => void;
}

export default function TagTree({ nodes, onSelect, selectedNodes, onSelectedNodesChange }: TagTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const handleDragStart = (e: React.DragEvent, node: TagNode) => {
    e.stopPropagation();
    
    const dragData = {
      nodes: node.type === 'folder' ? collectNestedTags(node) : [{
        id: node.id,
        name: node.name,
        type: node.type,
        path: getNodePath(node)
      }]
    };

    e.dataTransfer.setData('application/json', JSON.stringify(dragData));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleNodeClick = (node: TagNode) => {
    if (node.type === 'folder') {
      setExpandedNodes(prev => {
        const next = new Set(prev);
        if (next.has(node.id)) {
          next.delete(node.id);
        } else {
          next.add(node.id);
        }
        return next;
      });
    }
    onSelect(node);
  };

  const renderNode = (node: TagNode, level: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const isSelected = selectedNodes.has(node.id);

    return (
      <div key={node.id}>
        <TreeNode
          node={node}
          level={level}
          isExpanded={isExpanded}
          isSelected={isSelected}
          onToggle={() => handleNodeClick(node)}
          onSelect={() => onSelect(node)}
          onDragStart={(e) => handleDragStart(e, node)}
        />
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return <div className="py-2">{nodes.map((node) => renderNode(node))}</div>;
}