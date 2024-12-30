import { EdgeMenuItem } from '../../Edge/types';

export interface BreadcrumbSegment {
  label: string;
  href: string;
}

export function getFormattedBreadcrumbs(pathname: string): BreadcrumbSegment[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbSegment[] = [];
  
  // Only add NameSpace as first item if we're not already on the namespace page
  if (segments[0] !== 'namespace') {
    breadcrumbs.push({
      label: 'NameSpace',
      href: '/namespace'
    });
  }

  // Handle edge device routes
  if (segments[0] && segments[0].toLowerCase().includes('edge')) {
    const deviceName = formatEdgeDeviceName(segments[0]);
    breadcrumbs.push({
      label: deviceName,
      href: `/${segments[0]}`
    });
    segments.shift(); // Remove edge segment as it's been handled
  }

  // Add remaining segments
  segments.forEach((segment, index) => {
    // Skip if it's 'namespace' and we already have NameSpace in breadcrumbs
    if (segment === 'namespace' && breadcrumbs.some(b => b.label === 'NameSpace')) {
      return;
    }

    const href = `/${segments.slice(0, index + 1).join('/')}`;
    breadcrumbs.push({
      label: formatSegmentLabel(segment),
      href
    });
  });

  return breadcrumbs;
}

function formatEdgeDeviceName(segment: string): string {
  if (!segment) return '';
  const deviceLetter = segment.slice(-1).toUpperCase();
  return `Edge Device ${deviceLetter}`;
}

function formatSegmentLabel(segment: string): string {
  if (!segment) return '';
  
  // Handle special cases
  const specialCases: Record<string, string> = {
    'opcua': 'OPC UA',
    'uns': 'UNS',
    'udt': 'UDT',
    'connections': 'Connections',
    'add': 'Add',
    'tagspace': 'TagSpace',
    'namespace': 'NameSpace'
  };

  const lowercaseSegment = segment.toLowerCase();
  if (specialCases[lowercaseSegment]) {
    return specialCases[lowercaseSegment];
  }

  // Default formatting for other segments
  return segment
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}