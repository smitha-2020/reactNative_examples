import { RouteProp } from '@react-navigation/native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { responsiveScale, useAppTheme } from '../Theme';
import { useLayoutEffect, useState } from 'react';
import { RouteStackParamList } from '../navigation/types';
import { View } from 'react-native';
import RecipeListByCategory from '../components/RecipeListByCategory';
import BottomSheetFilter from '../components/ui/bottomSheet/BottomSheetFilter';

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
      <View
        style={{
          marginTop: 40,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: responsiveScale(8),
          flexWrap: 'wrap',
        }}
      >
        {/**<TouchableOpacity
          style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
          onPress={openSheet}
        >
          <Icon name="filter" size={25} color="gray" />
        </TouchableOpacity> */}
        <RecipeListByCategory
          navigation={navigation}
          searchText={searchText}
          categoryId={categoryId}
        />
        <BottomSheetFilter />
      </View>
    </ViewOuterTemplate>
  );
};

export default DetailsScreen;
