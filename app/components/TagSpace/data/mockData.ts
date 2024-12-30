import { TagSpaceNode, Tag } from '../types';

export const mockTagSpaceData: TagSpaceNode[] = [
  {
    id: '1',
    name: 'Process Tags',
    type: 'folder',
    children: [
      {
        id: '1.1',
        name: 'Area 1',
        type: 'folder',
        children: [
          {
            id: '1.1.1',
            name: 'Temperature',
            type: 'tablespace',
            children: []
          },
          {
            id: '1.1.2',
            name: 'Pressure',
            type: 'tablespace',
            children: []
          }
        ]
      },
      {
        id: '1.2',
        name: 'Area 2',
        type: 'folder',
        children: [
          {
            id: '1.2.1',
            name: 'Flow',
            type: 'tablespace',
            children: []
          }
        ]
      }
    ]
  }
];

export const mockTags: Tag[] = [
  {
    id: '1',
    name: 'TT101',
    dataType: 'float',
    description: 'Temperature sensor 1',
    tablespaceId: '1.1.1'
  },
  {
    id: '2',
    name: 'TT102',
    dataType: 'float',
    description: 'Temperature sensor 2',
    tablespaceId: '1.1.1'
  },
  {
    id: '3',
    name: 'PT101',
    dataType: 'float',
    description: 'Pressure transmitter 1',
    tablespaceId: '1.1.2'
  }
];