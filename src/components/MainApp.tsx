import AppStateProvider from './provider/AppStateProvider';
import Routes from './Routes';

const MainApp = () => {
  return (
    <AppStateProvider>
      <Routes />
    </AppStateProvider>
  );
};

export default MainApp;
