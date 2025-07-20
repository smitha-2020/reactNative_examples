import { ParamListBase, RouteProp } from '@react-navigation/native';
import CategoryList from '../components/CategoryList';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { Category } from '../models/category';

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
