'use client';

import Link from 'next/link';
import { EdgeMenuItem } from './types';

interface EdgeMenuCardProps extends EdgeMenuItem {
  edgeName: string;
}

export default function EdgeMenuCard({ title, icon, path, edgeName }: EdgeMenuCardProps) {
  const href = `/${edgeName.toLowerCase()}${path}`;

  return (
    <Link href={href}>
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      </div>
    </Link>
  );
}