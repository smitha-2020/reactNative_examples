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
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ marginBottom: 10 }}>
            <TextInput
              label="Enter Goal"
              value={goal}
              mode="outlined"
              onChangeText={goal => setGoal(goal)}
              multiline={false}
              numberOfLines={1}
            />
          </View>
          <Button mode="contained" onPress={() => addGoalFn()}>
            Add Goal
          </Button>
        </View>

        <FlatListView
          goals={goals}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </View>
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
