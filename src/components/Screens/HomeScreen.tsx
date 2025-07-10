import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteStackParamList } from '../Routes';

const HomeScreen = () => {
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
        <Text variant="bodySmall">Home Screen</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('DetailsScreen')}
        >
          Go to details
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;
