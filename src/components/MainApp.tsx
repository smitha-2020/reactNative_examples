import AppStateProvider from './Providers/AppStateProvider';
import InitialPage from './InitialPage';

const MainApp = () => {
  return (
    <AppStateProvider>
      <InitialPage />
    </AppStateProvider>
  );
};

export default MainApp;
