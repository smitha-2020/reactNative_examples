import { StyleProp, View, ViewStyle } from 'react-native';

const ViewColumn = ({
  children,
  style,
}: {
  children: React.JSX.Element;
  style: StyleProp<ViewStyle>;
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
