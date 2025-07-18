import AppStateProvider from './provider/AppStateProvider';
//import Routes from './Routes';
import TabRoute from './TabRoute';

const MainApp = () => {
  return (
    <AppStateProvider>
      <TabRoute />
    </AppStateProvider>
  );
};

export default MainApp;
