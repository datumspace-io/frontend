import TopNav from '../components/Navigation/TopNav';
import Sidebar from '../components/Sidebar/Sidebar';

export default function AppsPage() {
  return (
    <div className="flex flex-col h-screen">
      <TopNav />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Apps</h1>
          <p className="text-gray-600">Apps content goes here</p>
        </main>
      </div>
    </div>
  );
}