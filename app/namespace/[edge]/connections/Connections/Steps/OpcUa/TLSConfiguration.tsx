interface TLSConfigurationProps {
  enabled: boolean;
  onEnableChange: (enabled: boolean) => void;
  onFileChange: (type: 'client' | 'private' | 'ca', file: File) => void;
}

export default function TLSConfiguration({ enabled, onEnableChange, onFileChange }: TLSConfigurationProps) {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-medium">TLS Configuration</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="enableTLS"
            checked={enabled}
            onChange={(e) => onEnableChange(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="enableTLS" className="text-sm text-gray-700">
            Enable TLS
          </label>
        </div>
      </div>

      {enabled && (
        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Client Certificate
            </label>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
                Choose File
              </button>
              <span className="text-sm text-gray-500">No file chosen</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Private Key
            </label>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
                Choose File
              </button>
              <span className="text-sm text-gray-500">No file chosen</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CA Certificate
            </label>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
                Choose File
              </button>
              <span className="text-sm text-gray-500">No file chosen</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}