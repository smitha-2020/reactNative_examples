import { View, Text } from 'react-native';

type ItemProps = { title: string };
const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default Item;
