export function formatBreadcrumbLabel(segment: string): string {
  // Handle special cases
  if (segment.toLowerCase() === 'opcua') return 'OPC UA';
  if (segment.toLowerCase() === 'uns') return 'UNS';
  if (segment.toLowerCase() === 'namespace') return 'NameSpace';
  
  // Handle edge device names
  if (segment.toLowerCase().includes('edge')) {
    const deviceLetter = segment.slice(-1).toUpperCase();
    return `Edge Device ${deviceLetter}`;
  }
  
  // Remove URL encoding and format other segments
  const decoded = decodeURIComponent(segment);
  return decoded
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getBreadcrumbHref(segments: string[], index: number): string {
  // Special case for namespace segment
  if (segments[index] === 'namespace') {
    return '/namespace';
  }
  
  return `/${segments.slice(0, index + 1).join('/')}`;
}