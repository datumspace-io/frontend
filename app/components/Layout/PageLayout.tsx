'use client';

import { Box } from '@mui/material';
import TopNav from '../Navigation/TopNav';
import Sidebar from '../Sidebar/Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopNav />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flex: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}