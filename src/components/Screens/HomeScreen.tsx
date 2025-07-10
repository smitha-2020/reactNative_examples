import { ParamListBase, RouteProp } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { Meal } from '../navigation/types';
import BackgroundImageWithOpacity from '../ui/BackgroundImageWithOpacity';
import {
  responsiveScale,
  responsiveScaleHeight,
  useAppTheme,
} from '../../Theme';
import ViewRow from '../ui/ViewRow';
import ViewColumn from '../ui/ViewColumn';

const HomeScreen = ({
  route,
  navigation,
  mealList,
}: {
  route: RouteProp<ParamListBase, 'HomeScreen'>;
  navigation: any;
  mealList: Meal[];
}) => {
  const { colors } = useAppTheme();
  return (
    <BackgroundImageWithOpacity>
      <ViewColumn
        style={{
          flex: 1,
          marginHorizontal: responsiveScale(30),
          marginVertical: responsiveScaleHeight(70),
        }}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: 'center' }}
          showsVerticalScrollIndicator={false}
        >
          <ViewRow
            style={{
              backgroundColor: colors.secondary,
              flex: 1,
              minWidth: '90%',
              padding: 30,
              marginVertical: responsiveScale(8),
            }}
          >
            <Text variant="bodySmall" style={{ color: colors.tertiary }}>
              Tomato Pasta
            </Text>
          </ViewRow>
        </ScrollView>
      </ViewColumn>
    </BackgroundImageWithOpacity>
  );
};

export default HomeScreen;
