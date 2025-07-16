import { RouteProp } from '@react-navigation/native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { responsiveScale, useAppTheme } from '../Theme';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { RouteStackParamList } from '../navigation/types';
import { TouchableOpacity, View } from 'react-native';
import RecipeListByCategory from '../components/RecipeListByCategory';
import BottomSheetFilter from '../components/ui/bottomSheet/BottomSheetFilter';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome6';

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
  const ref = useRef<BottomSheet>(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] =
    useState<boolean>(false);
  const [checked, setChecked] = useState<string>('');

  const handleBottomSheetVisibility = useCallback(() => {
    setIsBottomSheetVisible(!isBottomSheetVisible);
  }, []);

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
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 20,
          marginRight: -320,
        }}
        onPress={() => {
          handleBottomSheetVisibility();
          ref.current?.expand();
        }}
      >
        <Icon name="filter" size={25} color={colors.tertiary} />
      </TouchableOpacity>

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
        <RecipeListByCategory
          navigation={navigation}
          searchText={searchText}
          categoryId={categoryId}
          checked={checked}
        />
        <BottomSheetFilter
          ref={ref}
          isBottomSheetVisible={isBottomSheetVisible}
          handleBottomSheetVisibility={handleBottomSheetVisibility}
          setChecked={setChecked}
          checked={checked}
        />
      </View>
    </ViewOuterTemplate>
  );
};

export default DetailsScreen;
