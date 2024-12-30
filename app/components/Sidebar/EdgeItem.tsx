'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import EdgeIcon from '../Icons/EdgeIcon';
import { ConnectionsIcon, UDTIcon, TagSpaceIcon } from '../Icons/MenuIcons';
import SidebarMenuItem from './SidebarMenuItem';

interface EdgeItemProps {
  name: string;
}

export default function EdgeItem({ name }: EdgeItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const basePath = `/${name.toLowerCase()}`;
  const isActive = pathname.startsWith(basePath);
  const [isExpanded, setIsExpanded] = useState(isActive);

  const menuItems = [
    {
      icon: <ConnectionsIcon />,
      label: 'Connections',
      href: `${basePath}/connections`
    },
    {
      icon: <UDTIcon />,
      label: 'UDT',
      href: `${basePath}/udt`
    },
    {
      icon: <TagSpaceIcon />,
      label: 'TagSpace',
      href: `${basePath}/tagspace`
    }
  ];

  const handleEdgeClick = () => {
    setIsExpanded(!isExpanded);
    if (!isActive) {
      router.push(basePath);
    }
  };

  return (
    <div className="mb-2">
      <div 
        className={`sidebar-item flex justify-between items-center cursor-pointer ${isActive ? 'active' : ''}`}
        onClick={handleEdgeClick}
      >
        <div className="flex items-center gap-2">
          <EdgeIcon />
          <span>{name}</span>
        </div>
        <svg 
          className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      {isExpanded && (
        <div className="mt-1 space-y-1 border-l-2 border-gray-200 ml-4">
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item.href}
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  );
}