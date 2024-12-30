import ConnectionCard from './ConnectionCard';

export default function ConnectionsList() {
  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search connections..."
          className="w-full px-4 py-2 border border-gray-200 rounded-md"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <ConnectionCard title="OPC UA Server" type="opcua" />
        <ConnectionCard title="MQTT Broker" type="mqtt" />
        <ConnectionCard title="Database" type="jdbc" />
      </div>
    </>
  );
}