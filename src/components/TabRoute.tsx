import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';
import FavoriteListScreen from '../screens/FavoriteListScreen';
import IonicIons from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { responsiveScale } from '../Theme';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Routes}
          options={{
            tabBarIcon: ({
              focused,
              color,
              size,
            }: {
              focused: boolean;
              color: string;
              size: number;
            }) => {
              return (
                <EntypoIcon
                  name="home"
                  size={responsiveScale(20)}
                  color={focused ? 'red' : 'gray'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="FavoriteListScreen"
          component={FavoriteListScreen}
          options={{
            tabBarBadge: 5,
            tabBarIcon: ({
              focused,
              color,
              size,
            }: {
              focused: boolean;
              color: string;
              size: number;
            }) => {
              return (
                <IonicIons
                  name="heart"
                  size={responsiveScale(20)}
                  color={focused ? 'red' : 'gray'}
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
