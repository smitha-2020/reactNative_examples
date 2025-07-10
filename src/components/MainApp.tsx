import AppStateProvider from './Providers/AppStateProvider';
import Routes from './Routes';

const MainApp = () => {
  return (
    <AppStateProvider>
      <Routes />
    </AppStateProvider>
  );
};

export default MainApp;
