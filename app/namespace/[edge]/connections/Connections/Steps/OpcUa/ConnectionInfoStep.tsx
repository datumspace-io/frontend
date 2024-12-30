'use client';

import { useState } from 'react';
import ServerEndpoint from './ServerEndpoint';
import TLSConfiguration from './TLSConfiguration';
import { DiscoveredEndpoint, ConnectionTestResult } from './types';

export default function ConnectionInfoStep() {
  const [tlsEnabled, setTlsEnabled] = useState(false);
  const [securityPolicy, setSecurityPolicy] = useState('None');
  const [securityMode, setSecurityMode] = useState('None');
  const [testResult, setTestResult] = useState<ConnectionTestResult | null>(null);
  const [isTesting, setIsTesting] = useState(false);

  const handleEndpointChange = (endpoint: DiscoveredEndpoint) => {
    setSecurityPolicy(endpoint.securityPolicy);
    setSecurityMode(endpoint.securityMode);
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setTestResult(null);

    // Simulate API call
    setTimeout(() => {
      setTestResult({
        success: true,
        message: 'Connection successful!',
        details: 'Server version: 1.0.0'
      });
      setIsTesting(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="serverEndpoint" className="block text-sm font-medium text-gray-700 mb-1">
          Server Endpoint *
        </label>
        <ServerEndpoint onChange={handleEndpointChange} />
      </div>

      <div>
        <label htmlFor="securityPolicy" className="block text-sm font-medium text-gray-700 mb-1">
          Security Policy
        </label>
        <select
          id="securityPolicy"
          value={securityPolicy}
          onChange={(e) => setSecurityPolicy(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="None">None</option>
          <option value="Basic256">Basic256</option>
          <option value="Basic256Sha256">Basic256Sha256</option>
        </select>
      </div>

      <div>
        <label htmlFor="securityMode" className="block text-sm font-medium text-gray-700 mb-1">
          Security Mode
        </label>
        <select
          id="securityMode"
          value={securityMode}
          onChange={(e) => setSecurityMode(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="None">None</option>
          <option value="Sign">Sign</option>
          <option value="SignAndEncrypt">Sign and Encrypt</option>
        </select>
      </div>

      <TLSConfiguration
        enabled={tlsEnabled}
        onEnableChange={setTlsEnabled}
        onFileChange={() => {}}
      />

      <div className="space-y-4 border-t pt-4">
        <h3 className="font-medium">Authentication</h3>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="border-t pt-4">
        <button
          type="button"
          onClick={handleTestConnection}
          disabled={isTesting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center gap-2"
        >
          {isTesting ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Testing Connection...
            </>
          ) : (
            'Test Connection'
          )}
        </button>

        {testResult && (
          <div className={`mt-4 p-4 rounded-md ${
            testResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}>
            <div className="font-medium">{testResult.message}</div>
            {testResult.details && (
              <div className="text-sm mt-1">{testResult.details}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}