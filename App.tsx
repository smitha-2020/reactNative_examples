/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';
import FlatListView from './src/components/FlatListView';

function App() {
  const [goals, setGoals] = useState<string[]>([]);
  const [goal, setGoal] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const addGoalFn = () => {
    setGoals([...goals, goal]);
    setGoal('');
    setShowModal(true);
    console.log('hello');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
  },
});

export default App;
