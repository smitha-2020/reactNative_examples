import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { responsiveScale, useAppTheme } from '../Theme';

import FavoriteListScreen from '../screens/FavoriteListScreen';
import IonicIons from 'react-native-vector-icons/Ionicons';
import Routes from './Routes';
import { useAppSelector } from '../app/hooks';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  const { colors } = useAppTheme();
  const badge = useAppSelector(state => state.RecipeReducer.favoriteIds).length;
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: colors.tertiary,
          tabBarStyle: {
            backgroundColor: colors.secondary,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Routes}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => {
              return (
                <EntypoIcon
                  name="home"
                  size={responsiveScale(20)}
                  color={focused ? 'red' : colors.tertiary}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="FavoriteListScreen"
          component={FavoriteListScreen}
          options={{
            tabBarBadge: badge,
            tabBarIcon: ({ focused }: { focused: boolean }) => {
              return (
                <IonicIons
                  name="heart"
                  size={responsiveScale(20)}
                  color={focused ? 'red' : colors.tertiary}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabRoute;
