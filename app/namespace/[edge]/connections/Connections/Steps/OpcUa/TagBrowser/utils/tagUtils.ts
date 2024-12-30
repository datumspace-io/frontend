import { TagNode, SelectedTag } from '../../types';

export const getNodePath = (node: TagNode): string => {
  const parts = [];
  let current = node;
  while (current.parent) {
    parts.unshift(current.name);
    current = current.parent;
  }
  return '/' + parts.join('/');
};

export const collectNestedTags = (node: TagNode): SelectedTag[] => {
  const path = getNodePath(node);
  
  if (node.type === 'folder') {
    const folderNode: SelectedTag = {
      id: node.id,
      name: node.name,
      type: 'folder',
      path,
      children: node.children?.map(child => ({
        ...child,
        path: `${path}/${child.name}`,
        children: child.type === 'folder' ? [] : undefined
      }))
    };
    return [folderNode];
  }
  
  return [{
    id: node.id,
    name: node.name,
    type: 'tag',
    path
  }];
};