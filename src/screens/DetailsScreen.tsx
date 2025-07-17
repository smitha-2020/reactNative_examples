import { RouteProp } from '@react-navigation/native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { responsiveScale, useAppTheme } from '../Theme';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { RouteStackParamList } from '../navigation/types';
import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import RecipeListByCategory from '../components/RecipeListByCategory';
import BottomSheetFilter from '../components/ui/bottomSheet/BottomSheetFilter';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome6';
import DropdownComponent from '../components/DropdownComponent';

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
  const { width } = useWindowDimensions();
  const [gender, setGender] = useState<string>();
  const OPTIONS = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

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
      <View
        style={{
          width,
          height: responsiveScale(20),
          marginTop: responsiveScale(15),
          paddingHorizontal: responsiveScale(20),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: colors.tertiary, fontWeight: 'bold' }}>
            Sort By
          </Text>
          <DropdownComponent />
        </View>
        <TouchableOpacity
          onPress={() => {
            handleBottomSheetVisibility();
            ref.current?.expand();
          }}
        >
          <Icon name="filter" size={25} color={colors.tertiary} />
        </TouchableOpacity>
      </View>

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
