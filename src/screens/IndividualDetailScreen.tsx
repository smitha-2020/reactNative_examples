import { RouteProp } from '@react-navigation/native';
import { responsiveScale, useAppTheme } from '../Theme';
import { RouteStackParamList } from '../navigation/types';
import { Text, View } from 'react-native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { Card } from 'react-native-paper';

const IndividualDetailScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<RouteStackParamList, 'IndividualDetailScreen'>;
  navigation: any;
}) => {
  const recipeId = route.params.recipeId;

  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="80">
      <View>CustomCard Here {recipeId}</View>
    </ViewOuterTemplate>
  );
};

export default IndividualDetailScreen;
