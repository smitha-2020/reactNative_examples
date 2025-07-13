import { ScrollView, View } from 'react-native';
import { responsiveScale, responsiveScaleHeight } from '../../../Theme';
import BackgroundImageWithOpacity from '../BackgroundImageWithOpacity';
import ViewTemplate from './ViewTemplate';
import ViewColumn from '../ViewColumn';

const ViewOuterTemplate = ({
  children,
  marginWidth,
  marginHeight,
}: {
  children: React.ReactNode;
  marginHeight: string;
  marginWidth: string;
}) => {
  return (
    <BackgroundImageWithOpacity>
      <ViewTemplate marginWidth={marginWidth} marginHeight={marginHeight}>
        {/** <ScrollView
          contentContainerStyle={{ alignItems: 'center' }}
          showsVerticalScrollIndicator={false}
        > */}
        <ViewColumn>{children}</ViewColumn>
        {/** </ScrollView> */}
      </ViewTemplate>
    </BackgroundImageWithOpacity>
  );
};

export default ViewOuterTemplate;
