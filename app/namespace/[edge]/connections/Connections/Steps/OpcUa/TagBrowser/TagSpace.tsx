'use client';

import { useState } from 'react';
import { SelectedTag } from '../types';
import TagItem from './components/TagItem';
import FolderNode from './components/FolderNode';

interface TagSpaceProps {
  selectedTags: SelectedTag[];
  onRemoveTag: (tagId: string) => void;
  onAddTags: (tags: SelectedTag[]) => void;
}

export default function TagSpace({ selectedTags, onRemoveTag, onAddTags }: TagSpaceProps) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    
    try {
      const data = e.dataTransfer.getData('application/json');
      if (data) {
        const { nodes } = JSON.parse(data);
        onAddTags(nodes);
      }
    } catch (err) {
      console.error('Error parsing dropped data:', err);
    }
  };

  const renderNode = (node: SelectedTag, level: number = 0) => {
    return (
      <div key={node.id} className="mb-2">
        {node.type === 'folder' ? (
          <div>
            <FolderNode 
              name={node.name} 
              path={node.path}
              level={level}
            />
            {node.children && (
              <div className="ml-4">
                {node.children.map(child => renderNode(child, level + 1))}
              </div>
            )}
          </div>
        ) : (
          <div className="ml-4">
            <TagItem tag={node} onRemove={onRemoveTag} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">TagSpace</h3>
        <div className="text-sm text-gray-500">
          {selectedTags.length} items selected
        </div>
      </div>
      
      <div 
        className={`border rounded-md p-4 space-y-2 bg-white h-[calc(100%-4rem)] overflow-auto
          ${isDraggingOver ? 'border-blue-500 border-2' : 'border-gray-200'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedTags.length === 0 ? (
          <div className="h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 text-center">
              Drag and drop tags or folders here
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {selectedTags.map(node => renderNode(node))}
          </div>
        )}
      </div>
    </div>
  );
}