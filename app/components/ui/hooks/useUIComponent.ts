import { useUI } from '../providers/UIProvider';

export function useUIComponent<T>(MUIComponent: T, RadixComponent: T): T {
  const { library } = useUI();
  return library === 'mui' ? MUIComponent : RadixComponent;
}