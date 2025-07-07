import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useAppTheme } from '../Theme';

const InitialPage = () => {
  const { colors } = useAppTheme();
  return (
    <View style={{ flex: 1, backgroundColor: 'coral' }}>
      <View style={{ padding: 100 }}>
        <Text variant="bodySmall" style={{ color: colors.brandSecondary }}>
          Submit
        </Text>
        <Button icon="camera">Press me</Button>
      </View>
    </View>
  );
};

export default InitialPage;
