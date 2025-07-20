import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { memo } from 'react';
import { FavStackParamList } from '../navigation/types';
import { useAppTheme } from '../Theme';
import FavoriteListScreen from '../screens/FavoriteListScreen';

const Stack = createNativeStackNavigator<FavStackParamList>();

const FavRoutes = () => {
  const MemorizedFavScreen = memo(FavoriteListScreen);
  const { colors } = useAppTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoriteListScreen" options={{ headerShown: false }}>
        {props => <MemorizedFavScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavRoutes;
