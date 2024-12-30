import PageLayout from '../../components/Layout/PageLayout';

interface UDTPageProps {
  params: {
    edge: string;
  };
}

export default function UDTPage({ params }: UDTPageProps) {
  const edgeName = params.edge.charAt(0).toUpperCase() + params.edge.slice(1);
  
  return (
    <PageLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">{edgeName} UDT</h1>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-gray-600">UDT configuration and management</p>
        </div>
      </div>
    </PageLayout>
  );
}