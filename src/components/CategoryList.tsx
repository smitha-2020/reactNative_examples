import ViewRow from './ui/ViewRow';
import { responsiveScale, useAppTheme } from '../Theme';
import { Text } from 'react-native-paper';
import Category from '../models/category';
import { Alert, TouchableOpacity } from 'react-native';

const CategoryList = ({
  category,
  navigation,
}: {
  category: Category[];
  navigation: any;
}) => {
  const { colors } = useAppTheme();

  const onPress = () => {
    navigation.navigate('DetailsScreen');
  };
  return (
    <>
      {category.map(category => (
        <TouchableOpacity
          key={category.id}
          onPress={onPress}
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
              {category.title}
            </Text>
          </ViewRow>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default CategoryList;
