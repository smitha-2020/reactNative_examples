import { StyleProp, View, ViewStyle } from 'react-native';

const ViewColumn = ({
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
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      {children}
    </View>
  );
};

export default ViewColumn;
