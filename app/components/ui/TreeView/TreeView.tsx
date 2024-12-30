'use client';

import { useState } from 'react';
import { TreeNode, TreeViewProps } from './types';
import { TreeViewNode } from './TreeViewNode';

export function TreeView({ nodes, onNodeSelect, selectedNodeId }: TreeViewProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const toggleNode = (nodeId: string) => {
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

  const renderNode = (node: TreeNode, level: number = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = node.id === selectedNodeId;

    return (
      <div key={node.id}>
        <TreeViewNode
          node={node}
          level={level}
          isExpanded={isExpanded}
          isSelected={isSelected}
          onToggle={() => toggleNode(node.id)}
          onSelect={() => onNodeSelect(node)}
        />
        {node.children && isExpanded && (
          <div>
            {node.children.map(child => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return <div className="py-2">{nodes.map(node => renderNode(node))}</div>;
}