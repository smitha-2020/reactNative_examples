import { useEffect, useState } from 'react';
import Meal from '../models/meal';
import { MEALS } from '../data/dummy-data';
import { Alert } from 'react-native';

export const useFilterBySearch = (searchText: string, categoryId: string) => {
  const [recipeList, setRecipeList] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchTextLower = searchText.toLowerCase();
    try {
      const recipes: Meal[] = MEALS.filter(filteredMeal => {
        const recipeMatch =
          filteredMeal.title.toLowerCase().includes(searchTextLower) ||
          filteredMeal.steps.some((step: string) =>
            step.toLowerCase().includes(searchTextLower),
          ) ||
          filteredMeal.ingredients.some((ingredient: string) =>
            ingredient.toLowerCase().includes(searchTextLower),
          );

        const categoryMatch = filteredMeal.categoryIds.includes(categoryId);

        return categoryMatch && recipeMatch;
      });

      setRecipeList(recipes);
      setLoading(false);
    } catch (err) {
      setError('An Error Occured while filtering recipes');
      setLoading(false);
    }
  }, [searchText, categoryId]);

  return { recipeList, loading, error };
};
