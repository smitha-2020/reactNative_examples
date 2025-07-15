import { RouteProp } from '@react-navigation/native';
import { useAppTheme } from '../Theme';
import { RouteStackParamList } from '../navigation/types';
import { Text, View } from 'react-native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';

const FavoriteListScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<RouteStackParamList, 'FavoriteListScreen'>;
  navigation: any;
}) => {
  const { colors } = useAppTheme();

  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="80">
      <View>
        <Text>Content goes here!</Text>
      </View>
    </ViewOuterTemplate>
  );
};

export default FavoriteListScreen;
