'use client';

import { EdgeMenuItem } from './types';
import EdgeMenuCard from './EdgeMenuCard';

interface EdgeOverviewProps {
  edgeName: string;
}

const menuItems: EdgeMenuItem[] = [
  {
    title: 'Connections',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v.5M12 14v.5M16 14v.5M14.5 9.5l-5 5M8 9h.01M16 9h.01" />
        <path strokeLinecap="round" strokeWidth={1.5} d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
      </svg>
    ),
    path: '/connections'
  },
  {
    title: 'UDT',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    path: '/udt'
  },
  {
    title: 'TagSpace',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    path: '/tagspace'
  }
];

export default function EdgeOverview({ edgeName }: EdgeOverviewProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">{edgeName}</h1>
      <div className="grid grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <EdgeMenuCard key={item.title} {...item} edgeName={edgeName} />
        ))}
      </div>
    </div>
  );
}