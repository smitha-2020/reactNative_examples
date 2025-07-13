import { ParamListBase, RouteProp } from '@react-navigation/native';
import Category from '../models/category';
import CategoryList from '../components/CategoryList';
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
