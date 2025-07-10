import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import { memo } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { RouteStackParamList } from './navigation/types';

const Stack = createNativeStackNavigator<RouteStackParamList>();

const Routes = () => {
  const MemorizedDetailsScreen = memo(DetailsScreen);
  const MemorizedHomeScreen = memo(HomeScreen);
  //const appContext = useContext(AppStateProviderContext);
  //const { colors } = useAppTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: 'coral' },
        }}
      >
        <Stack.Screen name="HomeScreen">
          {props => <MemorizedHomeScreen {...props} mealList={MEALS} />}
        </Stack.Screen>
        <Stack.Screen name="DetailsScreen">
          {props => <MemorizedDetailsScreen {...props} category={CATEGORIES} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
