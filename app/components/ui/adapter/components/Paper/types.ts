export interface PaperProps {
  variant?: 'elevation' | 'outlined';
  elevation?: number;
  className?: string;
  children: React.ReactNode;
}