import EdgeGrid from '../components/Namespace/EdgeGrid';

export default function NamespacePage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">NameSpace</h1>
        <p className="text-gray-600 mt-2">Available edge devices in your network</p>
      </div>
      <EdgeGrid />
    </div>
  );
}