'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Tag, TagSpaceNode } from '../types';

interface TagSpaceContextType {
  tags: Tag[];
  selectedNode: TagSpaceNode | null;
  setSelectedNode: (node: TagSpaceNode | null) => void;
  createTag: (tag: Omit<Tag, 'id'>) => void;
  updateTag: (tag: Tag) => void;
  deleteTag: (id: string) => void;
}

const TagSpaceContext = createContext<TagSpaceContextType | undefined>(undefined);

interface TagSpaceProviderProps {
  children: ReactNode;
  initialTags: Tag[];
}

export function TagSpaceProvider({ children, initialTags }: TagSpaceProviderProps) {
  const [tags, setTags] = useState<Tag[]>(initialTags);
  const [selectedNode, setSelectedNode] = useState<TagSpaceNode | null>(null);

  const createTag = (tag: Omit<Tag, 'id'>) => {
    const newTag: Tag = {
      ...tag,
      id: Math.random().toString(36).substr(2, 9)
    };
    setTags([...tags, newTag]);
  };

  const updateTag = (updatedTag: Tag) => {
    setTags(tags.map(tag => tag.id === updatedTag.id ? updatedTag : tag));
  };

  const deleteTag = (id: string) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return (
    <TagSpaceContext.Provider value={{
      tags,
      selectedNode,
      setSelectedNode,
      createTag,
      updateTag,
      deleteTag
    }}>
      {children}
    </TagSpaceContext.Provider>
  );
}

export function useTagSpace() {
  const context = useContext(TagSpaceContext);
  if (context === undefined) {
    throw new Error('useTagSpace must be used within a TagSpaceProvider');
  }
  return context;
}