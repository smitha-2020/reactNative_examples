import { ImageBackground, StyleProp, View, ViewStyle } from 'react-native';
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
  return (
    <ImageBackground
      source={require('../../assets/images/foodwiki.jpg')}
      resizeMode="cover"
      style={[style, { zIndex: -1, flex: 1 }]}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: opacity ?? colors.secondary,
        }}
      >
        {children}
      </View>
    </ImageBackground>
  );
};

export default BackgroundImageWithOpacity;
