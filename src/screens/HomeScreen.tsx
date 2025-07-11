import { ParamListBase, RouteProp } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import BackgroundImageWithOpacity from '../components/ui/BackgroundImageWithOpacity';
import ViewColumn from '../components/ui/ViewColumn';
import Category from '../models/category';
import CategoryList from '../components/CategoryList';
import ViewTemplate from '../components/ui/template/ViewTemplate';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';

const HomeScreen = ({
  route,
  navigation,
  category,
}: {
  route: RouteProp<ParamListBase, 'HomeScreen'>;
  navigation: any;
  category: Category[];
}) => {
  return (
    <ViewOuterTemplate marginWidth="30" marginHeight="70">
      <CategoryList category={category} navigation={navigation} />
    </ViewOuterTemplate>
  );
};

export default HomeScreen;
