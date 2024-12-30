export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}