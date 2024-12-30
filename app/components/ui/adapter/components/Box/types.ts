export interface BoxProps {
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  sx?: Record<string, any>;
}