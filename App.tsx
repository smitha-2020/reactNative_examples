/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { CustomLightTheme } from './src/Theme';
import InitialPage from './src/components/InitialPage';

const Main = () => {
  const theme = CustomLightTheme;
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={'coral'} />
      <InitialPage />
    </PaperProvider>
  );
};

function App(): React.JSX.Element {
  return <Main />;
}

export default App;
