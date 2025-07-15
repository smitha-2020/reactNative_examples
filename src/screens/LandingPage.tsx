import { ParamListBase, RouteProp } from '@react-navigation/native';
import Category from '../models/category';
import CategoryList from '../components/CategoryList';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { Text, View } from 'react-native';

const LandingPage = ({
  route,
  navigation,
}: {
  route: RouteProp<ParamListBase, 'LandingPage'>;
  navigation: any;
}) => {
  return (
    <ViewOuterTemplate marginWidth="30" marginHeight="70">
      <View>
        <Text>Nothing to display!</Text>
      </View>
    </ViewOuterTemplate>
  );
};

export default LandingPage;
