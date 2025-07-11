import { View } from 'react-native';
import { responsiveScale, responsiveScaleHeight } from '../../../Theme';

const ViewTemplate = ({
  children,
  marginWidth,
  marginHeight,
}: {
  children: React.ReactNode;
  marginHeight: string;
  marginWidth: string;
}) => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: responsiveScale(Number(marginWidth)),
        marginVertical: responsiveScaleHeight(Number(marginHeight)),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default ViewTemplate;
