'use client';

import { useState } from 'react';
import { TagSpaceNode } from '../types';
import TagSpaceTreeNode from './TagSpaceTreeNode';
import { useTagSpace } from '../context/TagSpaceContext';

interface TagSpaceTreeProps {
  nodes: TagSpaceNode[];
}

export function TagSpaceTree({ nodes }: TagSpaceTreeProps) {
  const { setSelectedNode } = useTagSpace();
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const handleNodeToggle = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  const handleNodeSelect = (node: TagSpaceNode) => {
    setSelectedNodeId(node.id);
    setSelectedNode(node);
  };

  const renderNode = (node: TagSpaceNode, level: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedNodeId === node.id;

    return (
      <div key={node.id}>
        <TagSpaceTreeNode
          node={node}
          level={level}
          isExpanded={isExpanded}
          isSelected={isSelected}
          onToggle={() => handleNodeToggle(node.id)}
          onSelect={() => handleNodeSelect(node)}
        />
        {node.children && isExpanded && (
          <div>
            {node.children.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return <div className="p-2">{nodes.map(node => renderNode(node))}</div>;
}