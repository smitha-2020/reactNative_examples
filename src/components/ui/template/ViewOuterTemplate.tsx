import BackgroundImageWithOpacity from '../BackgroundImageWithOpacity';
import ViewTemplate from './ViewTemplate';

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
        {children}
        {/** </ScrollView> */}
      </ViewTemplate>
    </BackgroundImageWithOpacity>
  );
};

export default ViewOuterTemplate;
