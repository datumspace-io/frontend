'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getFormattedBreadcrumbs } from './utils/breadcrumbsUtils';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = getFormattedBreadcrumbs(pathname);
  
  return (
    <nav className="bg-gray-50 px-4 py-2">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={`${crumb.href}-${index}`} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-500">/</span>
              )}
              
              {isLast ? (
                <span className="font-medium text-gray-900">
                  {crumb.label}
                </span>
              ) : (
                <Link 
                  href={crumb.href}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}