'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ListItem, Typography } from '@/components/ui/adapter';

interface SidebarMenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export default function SidebarMenuItem({ icon, label, href }: SidebarMenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log()

  return (
    <Link href={href}>
      <ListItem
        sx={{
          pl: 6,
          color: isActive ? 'primary.main' : 'text.primary',
          bgcolor: isActive ? 'action.selected' : 'transparent',
          '&:hover': {
            bgcolor: 'action.hover'
          }
        }}
      >
        {icon}
        <Typography sx={{ ml: 2 }}>{label}</Typography>
      </ListItem>
    </Link>
  );
}