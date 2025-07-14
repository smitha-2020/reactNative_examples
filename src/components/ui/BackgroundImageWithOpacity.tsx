import {
  Image,
  StyleProp,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import { useAppTheme } from '../../Theme';

const BackgroundImageWithOpacity = ({
  children,
  style,
  opacity,
}: {
  children: React.JSX.Element;
  style?: StyleProp<ViewStyle>;
  opacity?: string;
}) => {
  const { colors } = useAppTheme();
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: opacity ?? colors.secondary,
        position: 'relative',
      }}
    >
      <Image
        source={require('../../assets/images/foodwiki.jpg')}
        resizeMode="cover"
        style={[{ position: 'absolute', width, height, zIndex: -1 }]}
      />
      {children}
    </View>
  );
};

export default BackgroundImageWithOpacity;
