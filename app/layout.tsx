import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from './components/ui/providers/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DatumSpace',
  description: 'Edge device management platform',
  icons: {
    icon: '/vercel.svg', // Using vercel.svg as a temporary icon since it exists in public/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}