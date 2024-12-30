export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}