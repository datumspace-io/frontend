import { useUI } from '../providers/UIProvider';

export function useUILibrary() {
  const { library } = useUI();
  return {
    isMUI: library === 'mui',
    isRadix: library === 'radix'
  };
}