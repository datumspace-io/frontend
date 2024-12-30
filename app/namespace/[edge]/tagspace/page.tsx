'use client';

import { TagSpaceProvider } from '@/components/TagSpace/context/TagSpaceContext';
import { TagSpaceLayout } from '@/components/TagSpace/layouts/TagSpaceLayout';
import { mockTagSpaceData, mockTags } from '@/components/TagSpace/data/mockData';
import PageLayout from '@/components/Layout/PageLayout';

export default function TagSpacePage() {
  return (
    <PageLayout>
      <TagSpaceProvider initialTags={mockTags}>
        <TagSpaceLayout nodes={mockTagSpaceData} />
      </TagSpaceProvider>
    </PageLayout>
  );
}