import { RouteProp } from '@react-navigation/native';
import Meal from '../models/meal';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { useAppTheme } from '../Theme';
import { useEffect, useLayoutEffect, useState } from 'react';
import { RouteStackParamList } from '../navigation/types';
import { Alert, View } from 'react-native';
import RecipeListByCategory from '../components/RecipeListByCategory';

const DetailsScreen = ({
  route,
  navigation,
  mealList,
}: {
  route: RouteProp<RouteStackParamList, 'DetailsScreen'>;
  navigation: any;
  mealList: Meal[];
}) => {
  const { colors } = useAppTheme();
  const [searchText, setSearchText] = useState<string>('');
  const { categoryId } = route.params;
  const recipeList: Meal[] = mealList.filter(meal =>
    meal.categoryIds.includes(categoryId),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        barTintColor: colors.tertiary,
        textColor: colors.gray,
        placeholder: 'Search for Recipes...',
        hideWhenScrolling: false,
        onChangeText: (event: { nativeEvent: { text: any } }) => {
          setSearchText(event.nativeEvent.text);
        },
        onCancelButtonPress: () => {
          Alert.alert('Search cancelled');
        },
      },
    });
  }, [navigation]);
  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="80">
      <View style={{ marginTop: 40 }}>
        <RecipeListByCategory recipes={recipeList} navigation={navigation} />
      </View>
    </ViewOuterTemplate>
  );
};

export default DetailsScreen;
