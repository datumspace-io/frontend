import { useUI } from '../providers/UIProvider';
import type { ComponentType } from 'react';

export function createUIComponent<P extends object>(
  MUIComponent: ComponentType<P>,
  RadixComponent: ComponentType<P>
) {
  return function UIComponent(props: P) {
    const { library } = useUI();
    const Component = library === 'mui' ? MUIComponent : RadixComponent;
    return <Component {...props} />;
  };
}

export function withUIAdapter<P extends object>(
  Component: ComponentType<P>,
  displayName: string
) {
  const WrappedComponent = (props: P) => {
    const { library } = useUI();
    return <Component {...props} uiLibrary={library} />;
  };
  
  WrappedComponent.displayName = `withUIAdapter(${displayName})`;
  return WrappedComponent;
}