// Common types for UI components
export interface BaseComponentProps {
  className?: string;
}

export interface ButtonProps extends BaseComponentProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'number' | 'password' | 'email';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
}

export interface SelectProps extends BaseComponentProps {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
}

export interface TextAreaProps extends BaseComponentProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  error?: string;
  label?: string;
}

export interface DialogProps extends BaseComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}