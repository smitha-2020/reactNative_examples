import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  ReactNode,
} from 'react';
import { AppState } from 'react-native';

export const AppStateProviderContext = createContext('light');

const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('Need to set the isBackground state to false ');
        console.log('AppState', appState.current);
      } else if (
        nextAppState.match(/inactive|background/) &&
        appState.current === 'active'
      ) {
        console.log('Need to set the isBackground state to true ');
        console.log('AppState', appState.current);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState- Outside', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, [appStateVisible]);

  return (
    <AppStateProviderContext value={appStateVisible}>
      {children}
    </AppStateProviderContext>
  );
};

export default AppStateProvider;
