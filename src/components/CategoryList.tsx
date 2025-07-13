import ViewRow from './ui/ViewRow';
import { responsiveScale, useAppTheme } from '../Theme';
import { Text } from 'react-native-paper';
import Category from '../models/category';
import { FlatList, TouchableOpacity, View } from 'react-native';

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
          flex: 1,
          minWidth: '90%',
          padding: responsiveScale(10),
          marginVertical: responsiveScale(8),
          borderRadius: responsiveScale(50),
        }}
      >
        <ViewRow style={{ flex: 1 }}>
          <Text variant="bodySmall" style={{ color: colors.tertiary }}>
            {item.title}
          </Text>
        </ViewRow>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default CategoryList;
