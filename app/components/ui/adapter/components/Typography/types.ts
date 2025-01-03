export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body1' 
  | 'body2'
  | 'subtitle1'
  | 'subtitle2';

export interface TypographyProps {
  variant?: TypographyVariant;
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}