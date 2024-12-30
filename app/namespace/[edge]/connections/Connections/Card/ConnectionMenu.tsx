```tsx
'use client';

import { useState } from 'react';
import { IconButton } from '@/components/ui/adapter';

interface ConnectionMenuProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export function ConnectionMenu({ onEdit, onDelete }: ConnectionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <IconButton
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-gray-600"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </IconButton>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {onEdit && (
              <button
                onClick={() => {
                  onEdit();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => {
                  onDelete();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
```