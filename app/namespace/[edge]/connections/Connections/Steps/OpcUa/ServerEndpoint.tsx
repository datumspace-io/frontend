'use client';

import { useState } from 'react';
import { DiscoveredEndpoint } from './types';

interface ServerEndpointProps {
  onChange: (endpoint: DiscoveredEndpoint) => void;
}

export default function ServerEndpoint({ onChange }: ServerEndpointProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [endpoint, setEndpoint] = useState('');
  const [isDiscovering, setIsDiscovering] = useState(false);

  // Mock discovery endpoints - in real app, this would come from an API
  const discoveredEndpoints: DiscoveredEndpoint[] = [
    {
      endpointUrl: 'opc.tcp://localhost:4840',
      securityPolicy: 'Basic256Sha256',
      securityMode: 'SignAndEncrypt'
    },
    {
      endpointUrl: 'opc.tcp://localhost:4840',
      securityPolicy: 'Basic256',
      securityMode: 'Sign'
    },
    {
      endpointUrl: 'opc.tcp://localhost:4840',
      securityPolicy: 'None',
      securityMode: 'None'
    }
  ];

  const handleDiscovery = async () => {
    setIsDiscovering(true);
    // In a real app, this would make an API call to discover endpoints
    setTimeout(() => {
      setShowDropdown(true);
      setIsDiscovering(false);
    }, 1000);
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="opc.tcp://localhost:4840"
        />
        <button
          onClick={handleDiscovery}
          disabled={isDiscovering}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {isDiscovering ? (
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </button>
      </div>

      {showDropdown && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {discoveredEndpoints.map((ep, index) => (
            <button
              key={index}
              onClick={() => {
                setEndpoint(ep.endpointUrl);
                onChange(ep);
                setShowDropdown(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none border-b last:border-b-0"
            >
              <div className="font-medium">{ep.endpointUrl}</div>
              <div className="text-sm text-gray-500">
                Security Policy: {ep.securityPolicy}, Mode: {ep.securityMode}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}