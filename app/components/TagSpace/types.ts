export interface TagSpaceNode {
  id: string;
  name: string;
  type: 'folder' | 'tablespace';
  children?: TagSpaceNode[];
  parent?: TagSpaceNode;
}

export interface Tag {
  id: string;
  name: string;
  dataType: string;
  description?: string;
  tablespaceId: string;
}