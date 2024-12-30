export interface TreeNode {
  id: string;
  label: string;
  type: string;
  children?: TreeNode[];
}

export interface TreeViewProps {
  nodes: TreeNode[];
  onNodeSelect: (node: TreeNode) => void;
  selectedNodeId?: string;
}