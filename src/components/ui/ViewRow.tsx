import { StyleProp, View, ViewStyle } from 'react-native';

const ViewRow = ({
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
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      {children}
    </View>
  );
};

export default ViewRow;
