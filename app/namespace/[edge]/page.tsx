import EdgeOverview from '../components/Edge/EdgeOverview';
import PageLayout from '../components/Layout/PageLayout';

interface EdgePageProps {
  params: {
    edge: string;
  };
}

export default function EdgePage({ params }: EdgePageProps) {
  const edgeName = params.edge.charAt(0).toUpperCase() + params.edge.slice(1);
  
  return (
    <PageLayout>
      <EdgeOverview edgeName={edgeName} />
    </PageLayout>
  );
}