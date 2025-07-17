import ViewRow from './ui/ViewRow';
import { SPACING, responsiveScale, useAppTheme } from '../Theme';
import { Text } from 'react-native-paper';
import Category from '../models/category';
import { FlatList, TouchableOpacity } from 'react-native';

const CategoryList = ({
  category,
  navigation,
}: {
  category: Category[];
  navigation: any;
}) => {
  const { colors } = useAppTheme();

  const renderItem = ({ item }: { item: Category }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate('DetailsScreen', { categoryId: item.id });
        }}
        style={{
          backgroundColor: colors.secondary,
          minWidth: '90%',
          padding: responsiveScale(SPACING.S + SPACING.XS / 2),
          marginVertical: responsiveScale(SPACING.M / 2),
          borderRadius: responsiveScale(50),
        }}
      >
        <ViewRow>
          <Text variant="bodySmall" style={{ color: colors.tertiary }}>
            {item.title}
          </Text>
        </ViewRow>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={category}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default CategoryList;
