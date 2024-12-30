'use client';

import { useState } from 'react';
import TagTree from './TagBrowser/TagTree';
import TagSpace from './TagBrowser/TagSpace';
import { TagNode, SelectedTag } from './types';

// Enhanced mock data with more tags and folders
const mockTags = [
  {
    id: '1',
    name: 'DeviceSet',
    type: 'folder' as const,
    children: [
      {
        id: '1.1',
        name: 'ProductionLine1',
        type: 'folder' as const,
        children: [
          { id: '1.1.1', name: 'Temperature', type: 'tag' as const },
          { id: '1.1.2', name: 'Pressure', type: 'tag' as const },
          { id: '1.1.3', name: 'FlowRate', type: 'tag' as const },
          {
            id: '1.1.4',
            name: 'Motors',
            type: 'folder' as const,
            children: [
              { id: '1.1.4.1', name: 'Motor1Speed', type: 'tag' as const },
              { id: '1.1.4.2', name: 'Motor1Current', type: 'tag' as const },
              { id: '1.1.4.3', name: 'Motor2Speed', type: 'tag' as const },
              { id: '1.1.4.4', name: 'Motor2Current', type: 'tag' as const }
            ]
          }
        ]
      },
      {
        id: '1.2',
        name: 'ProductionLine2',
        type: 'folder' as const,
        children: [
          { id: '1.2.1', name: 'Status', type: 'tag' as const },
          { id: '1.2.2', name: 'Speed', type: 'tag' as const },
          {
            id: '1.2.3',
            name: 'Sensors',
            type: 'folder' as const,
            children: [
              { id: '1.2.3.1', name: 'Proximity1', type: 'tag' as const },
              { id: '1.2.3.2', name: 'Proximity2', type: 'tag' as const },
              { id: '1.2.3.3', name: 'LevelSensor1', type: 'tag' as const },
              { id: '1.2.3.4', name: 'LevelSensor2', type: 'tag' as const }
            ]
          }
        ]
      },
      {
        id: '1.3',
        name: 'Utilities',
        type: 'folder' as const,
        children: [
          {
            id: '1.3.1',
            name: 'PowerMeters',
            type: 'folder' as const,
            children: [
              { id: '1.3.1.1', name: 'MainPower', type: 'tag' as const },
              { id: '1.3.1.2', name: 'BackupPower', type: 'tag' as const }
            ]
          },
          {
            id: '1.3.2',
            name: 'HVAC',
            type: 'folder' as const,
            children: [
              { id: '1.3.2.1', name: 'RoomTemp1', type: 'tag' as const },
              { id: '1.3.2.2', name: 'RoomTemp2', type: 'tag' as const },
              { id: '1.3.2.3', name: 'Humidity1', type: 'tag' as const },
              { id: '1.3.2.4', name: 'Humidity2', type: 'tag' as const }
            ]
          }
        ]
      }
    ]
  }
];

export default function AddTagsStep() {
  const [isLoading, setIsLoading] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);
  const [selectedNodes, setSelectedNodes] = useState<Set<string>>(new Set());
  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([]);

  const handleBrowseServer = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowBrowser(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleRemoveTag = (tagId: string) => {
    setSelectedTags(tags => tags.filter(tag => tag.id !== tagId));
  };

  const handleAddTags = (newTags: SelectedTag[]) => {
    setSelectedTags(prevTags => {
      const uniqueTags = new Map([...prevTags, ...newTags].map(tag => [tag.id, tag]));
      return Array.from(uniqueTags.values());
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Tag Browser</h3>
        <button
          type="button"
          onClick={handleBrowseServer}
          disabled={isLoading}
          className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Browsing...
            </>
          ) : (
            'Browse Server'
          )}
        </button>
      </div>

      {showBrowser ? (
        <div className="flex border rounded-lg overflow-hidden h-[600px]">
          <div className="w-1/2 border-r overflow-auto p-4">
            <TagTree
              nodes={mockTags}
              onSelect={(node) => console.log('Selected:', node)}
              selectedNodes={selectedNodes}
              onSelectedNodesChange={setSelectedNodes}
            />
          </div>
          <div className="w-1/2 overflow-auto">
            <TagSpace
              selectedTags={selectedTags}
              onRemoveTag={handleRemoveTag}
              onAddTags={handleAddTags}
            />
          </div>
        </div>
      ) : (
        <div className="border rounded-lg h-[600px] flex items-center justify-center">
          <p className="text-gray-500">
            Click "Browse Server" to view available tags
          </p>
        </div>
      )}
    </div>
  );
}