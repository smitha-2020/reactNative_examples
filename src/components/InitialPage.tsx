import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useAppTheme } from '../Theme';
import { useContext } from 'react';
import { AppStateProviderContext } from './Providers/AppStateProvider';

const InitialPage = () => {
  const appContext = useContext(AppStateProviderContext);
  const { colors } = useAppTheme();
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
        <Text variant="bodySmall" style={{ color: colors.brandSecondary }}>
          {appContext}
        </Text>
      </View>
    </View>
  );
};

export default InitialPage;
