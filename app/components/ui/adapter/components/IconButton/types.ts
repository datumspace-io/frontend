export interface IconButtonProps {
  color?: 'inherit' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}