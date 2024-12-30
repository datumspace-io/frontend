'use client';

import { createContext, useContext } from 'react';

type UILibrary = 'mui' | 'radix';

interface UIContextType {
  library: UILibrary;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

interface UIProviderProps {
  library: UILibrary;
  children: React.ReactNode;
}

export function UIProvider({ library, children }: UIProviderProps) {
  return (
    <UIContext.Provider value={{ library }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}