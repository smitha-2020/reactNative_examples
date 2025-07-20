import { ParamListBase, RouteProp } from '@react-navigation/native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import FavouriteList from '../components/FavouriteList';

const FavoriteListScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase, 'FavoriteListScreen'>;
  navigation: any;
}) => {
  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="70">
      <FavouriteList navigation={navigation} />
    </ViewOuterTemplate>
  );
};

export default FavoriteListScreen;
