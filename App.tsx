/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { CustomLightTheme } from './src/Theme';
import MainApp from './src/components/MainApp';

const Main = () => {
  const theme = CustomLightTheme;
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={'coral'} />
      <MainApp />
    </PaperProvider>
  );
};

function App(): React.JSX.Element {
  return <Main />;
}

export default App;
