import { responsiveScale, useAppTheme } from '../Theme';
import { Card, Text } from 'react-native-paper';
import { FlatList } from 'react-native';

import { Meal } from '../models/meal';
import { useFilters } from '../hooks/useFilters';
import { AllergyTypes } from '../navigation/types';

const RecipeListByCategory = ({
  navigation,
  searchText,
  categoryId,
  checked,
}: {
  navigation: any;
  searchText: string;
  categoryId: string;
  checked: Record<AllergyTypes, boolean>;
}) => {
  const { colors } = useAppTheme();

  const { meals } = useFilters({ searchText, categoryId, checked });

  const renderItem = ({ item }: { item: Meal }) => {
    return (
      <Card
        elevation={4}
        onPress={() => {
          navigation.navigate('IndividualDetailScreen', { recipeId: item.id });
        }}
        style={{
          flex: 1,
          marginHorizontal: responsiveScale(8),
          backgroundColor: 'rgba(255, 255, 255, 0.2)',

          shadowColor: 'white',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <Card.Cover
          source={{ uri: item.imageUrl }}
          style={{
            marginTop: responsiveScale(10),
            marginHorizontal: responsiveScale(10),
            marginBottom: responsiveScale(20),

            shadowColor: 'white',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 2,
          }}
        />
        <Card.Title
          title={item.title}
          titleVariant="bodySmall"
          titleStyle={{
            color: colors.tertiary,
          }}
        />
      </Card>
    );
  };

  return (
    <FlatList
      data={meals}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={{
        gap: responsiveScale(10),
        marginTop: responsiveScale(10),
      }}
      ListEmptyComponent={
        <Text
          style={{ textAlign: 'center', marginTop: 20, color: colors.tertiary }}
        >
          No recipes found. Please try a different search.
        </Text>
      }
    />
  );
};

export default RecipeListByCategory;
