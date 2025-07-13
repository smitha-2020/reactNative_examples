import { RouteProp } from '@react-navigation/native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { useAppTheme } from '../Theme';
import { useLayoutEffect, useState } from 'react';
import { RouteStackParamList } from '../navigation/types';
import { Alert, View } from 'react-native';
import RecipeListByCategory from '../components/RecipeListByCategory';

const DetailsScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<RouteStackParamList, 'DetailsScreen'>;
  navigation: any;
}) => {
  const { colors } = useAppTheme();
  const [searchText, setSearchText] = useState<string>('');
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        barTintColor: colors.tertiary,
        textColor: colors.gray,
        placeholder: 'Search Recipes title/ingredients/ category',
        hideWhenScrolling: false,
        onChangeText: (event: { nativeEvent: { text: any } }) => {
          setSearchText(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);
  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="80">
      <View style={{ marginTop: 40 }}>
        <RecipeListByCategory
          navigation={navigation}
          searchText={searchText}
          categoryId={categoryId}
        />
      </View>
    </ViewOuterTemplate>
  );
};

export default DetailsScreen;
