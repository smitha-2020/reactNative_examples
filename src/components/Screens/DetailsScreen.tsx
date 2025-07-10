import { ParamListBase, RouteProp } from '@react-navigation/native';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Category from '../../models/category';

const DetailsScreen = ({
  route,
  navigation,
  category,
}: {
  route: RouteProp<ParamListBase, 'DetailsScreen'>;
  navigation: any;
  category: Category[];
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'coral',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ padding: 100 }}>
        <Text variant="bodySmall">DetailsScreen</Text>

        <Button mode="contained" onPress={() => navigation.goBack()}>
          Go Back
        </Button>
      </View>
    </View>
  );
};

export default DetailsScreen;
