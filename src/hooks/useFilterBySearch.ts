import { useEffect, useState } from 'react';
import Meal from '../models/meal';
import { MEALS } from '../data/dummy-data';
import { FilterBySearchProps } from '../navigation/types';

export const useFilterBySearch = ({
  searchText,
  categoryId,
  recipeId,
  checked,
}: FilterBySearchProps) => {
  const [recipeList, setRecipeList] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let recipes: Meal[] = [];
    try {
      if (categoryId && searchText !== undefined) {
        const searchTextLower = searchText?.toLowerCase();
        recipes = MEALS.filter(filteredMeal => {
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
      } else if (recipeId && !checked) {
        recipes = MEALS.filter(recipe => {
          return recipe.id === recipeId;
        });
      }
      setRecipeList(recipes);
      setLoading(false);
    } catch (err) {
      console.log(`Exception while doing something: ${err}`);
      setError('An Error Occured while filtering recipes');
      setLoading(false);
    }
  }, [searchText, categoryId, recipeId, checked]);

  return { recipeList, loading, error };
};
