import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { RouteStackParamList } from '../Routes';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const DetailsScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RouteStackParamList>>();
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
