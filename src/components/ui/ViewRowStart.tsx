import { StyleProp, View, ViewStyle } from 'react-native';

const ViewRowStart = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={[
        style,
        {
          flexDirection: 'row',
          justifyContent: 'flex-start',
        },
      ]}
    >
      {children}
    </View>
  );
};

export default ViewRowStart;
