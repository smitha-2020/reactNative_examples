import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { memo } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { RouteStackParamList } from '../navigation/types';
import { useAppTheme } from '../Theme';

const Stack = createNativeStackNavigator<RouteStackParamList>();

const Routes = () => {
  const MemorizedDetailsScreen = memo(DetailsScreen);
  const MemorizedHomeScreen = memo(HomeScreen);
  //const appContext = useContext(AppStateProviderContext);
  const { colors } = useAppTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
          {props => <MemorizedHomeScreen {...props} category={CATEGORIES} />}
        </Stack.Screen>
        <Stack.Screen
          name="DetailsScreen"
          options={{
            headerTransparent: true,
            headerShown: true,
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: '',
            headerTintColor: colors.tertiary,
          }}
        >
          {props => <MemorizedDetailsScreen {...props} mealList={MEALS} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
