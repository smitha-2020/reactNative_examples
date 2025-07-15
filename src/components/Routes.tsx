import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { memo } from 'react';
import { CATEGORIES } from '../data/dummy-data';
import { RouteStackParamList } from '../navigation/types';
import { useAppTheme } from '../Theme';
import IndividualDetailScreen from '../screens/IndividualDetailScreen';
import FavoriteListScreen from '../screens/FavoritelistScreen';
import LandingPage from '../screens/LandingPage';

const Stack = createNativeStackNavigator<RouteStackParamList>();

const Routes = () => {
  const MemorizedDetailsScreen = memo(DetailsScreen);
  const MemorizedLandingPage = memo(LandingPage);
  const MemorizedHomeScreen = memo(HomeScreen);
  const MemorizedIndividualDetailScreen = memo(IndividualDetailScreen);
  const MemorizedFavoriteListScreen = memo(FavoriteListScreen);
  //const appContext = useContext(AppStateProviderContext);
  //console.log(appContext);
  const { colors } = useAppTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
          {props => <MemorizedHomeScreen {...props} category={CATEGORIES} />}
        </Stack.Screen>
        <Stack.Screen name="LandingPage" options={{ headerShown: false }}>
          {props => <MemorizedLandingPage {...props} />}
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
          {props => <MemorizedDetailsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="IndividualDetailScreen"
          options={{
            headerTransparent: true,
            headerShown: true,
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: '',
            headerTintColor: colors.tertiary,
          }}
        >
          {props => <MemorizedIndividualDetailScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen
          name="FavoriteListScreen"
          options={{
            headerTransparent: true,
            headerShown: true,
            headerBackButtonDisplayMode: 'minimal',
            headerTitle: '',
            headerTintColor: colors.tertiary,
          }}
        >
          {props => <MemorizedFavoriteListScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
