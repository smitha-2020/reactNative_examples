/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { CustomLightTheme } from './src/Theme';
import MainApp from './src/components/MainApp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Main = () => {
  const theme = CustomLightTheme;
  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView>
        <StatusBar backgroundColor={'coral'} />
        <MainApp />
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

function App(): React.JSX.Element {
  return <Main />;
}

export default App;
