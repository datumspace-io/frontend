'use client';

import { useState } from 'react';

export default function BasicInfoStep() {
  const [formData, setFormData] = useState({
    connectionName: '',
    description: ''
  });

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="connectionName" className="block text-sm font-medium text-gray-700 mb-1">
          Connection Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="connectionName"
          value={formData.connectionName}
          onChange={(e) => setFormData(prev => ({ ...prev, connectionName: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter connection name"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter description"
        />
      </div>
    </div>
  );
}