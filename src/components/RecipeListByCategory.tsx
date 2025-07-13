import ViewRow from './ui/ViewRow';
import { responsiveScale, useAppTheme } from '../Theme';
import { Text } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native';
import { useFilterBySearch } from '../hooks/useFilterBySearch';
import Meal from '../models/meal';

const RecipeListByCategory = ({
  navigation,
  searchText,
  categoryId,
}: {
  navigation: any;
  searchText: string;
  categoryId: string;
}) => {
  const { colors } = useAppTheme();
  const { recipeList, loading, error } = useFilterBySearch(
    searchText,
    categoryId,
  );

  const renderItem = ({ item }: { item: Meal }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {}}
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

  if (loading) {
    return (
      <ViewRow>
        <Text variant="bodySmall" style={{ color: colors.tertiary }}>
          Loading...
        </Text>
      </ViewRow>
    );
  }

  return (
    <>
      <FlatList
        data={recipeList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default RecipeListByCategory;
