export interface TagNode {
  id: string;
  name: string;
  type: 'folder' | 'tag';
  children?: TagNode[];
  parent?: TagNode;
}

export interface SelectedTag {
  id: string;
  name: string;
  type: 'folder' | 'tag';
  path: string;
  children?: SelectedTag[];
}