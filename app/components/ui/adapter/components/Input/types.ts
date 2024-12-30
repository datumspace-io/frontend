export interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}