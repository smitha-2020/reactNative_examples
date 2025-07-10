import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export type RouteStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: undefined;
  // add other routes here
};

const Routes = () => {
  //const appContext = useContext(AppStateProviderContext);
  //const { colors } = useAppTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'coral' },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
