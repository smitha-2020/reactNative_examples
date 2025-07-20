import { responsiveScale, useAppTheme } from '../Theme';
import { Text } from 'react-native-paper';
import { FlatList, Image, View, useWindowDimensions } from 'react-native';

import { Meal } from '../models/meal';

import { useAppSelector } from '../app/hooks';
import DietaryListing from './DietaryListing';

const FavouriteList = ({ navigation }: { navigation: any }) => {
  const { colors } = useAppTheme();

  const recipes = useAppSelector(state => state.RecipeReducer.value);
  const favs = useAppSelector(state => state.RecipeReducer.favoriteIds);
  const favRecipes = recipes.filter(recipe => {
    return favs.includes(recipe.id);
  });

  const { width } = useWindowDimensions();

  const renderItem = ({ item }: { item: Meal }) => {
    return (
      <View
        style={{
          width,
          padding: responsiveScale(20),
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          marginBottom: responsiveScale(10),
        }}
      >
        <View>
          <Image
            style={{
              borderRadius: responsiveScale(20),
              height: 150,
              marginBottom: responsiveScale(20),

              resizeMode: 'cover', // or 'contain' depending on your need
            }}
            source={{ uri: item.imageUrl }}
          />
          <Text
            variant="bodySmall"
            style={{
              color: 'coral',
              fontWeight: 'bold',
              fontFamily: 'FontAwesome6',
              marginBottom: responsiveScale(10),
            }}
          >
            {item.title.toUpperCase()}
          </Text>
        </View>
        <DietaryListing item={item} />
      </View>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={favRecipes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
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

export default FavouriteList;
