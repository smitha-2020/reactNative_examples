import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import Meal from '../models/meal';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { responsiveScale, useAppTheme } from '../Theme';
import ViewRow from '../components/ui/ViewRow';
import { TouchableOpacity, View } from 'react-native';

const DetailsScreen = ({
  route,
  navigation,
  mealList,
}: {
  route: RouteProp<ParamListBase, 'DetailsScreen'>;
  navigation: any;
  mealList: Meal[];
}) => {
  const { colors } = useAppTheme();
  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="30">
      <View
        style={{
          backgroundColor: 'pink',
          minWidth: '90%',
          padding: responsiveScale(10),
        }}
      ></View>
      <TouchableOpacity
        onPress={() => console.log('heyy')}
        style={{
          backgroundColor: colors.secondary,
          flex: 1,
          minWidth: '90%',
          padding: responsiveScale(10),
          marginVertical: responsiveScale(8),
          borderRadius: responsiveScale(50),
        }}
      >
        <ViewRow style={{ flex: 1 }}>
          <Text variant="bodySmall" style={{ color: colors.tertiary }}>
            Details Screen
          </Text>
        </ViewRow>
      </TouchableOpacity>
    </ViewOuterTemplate>
  );
};

export default DetailsScreen;
