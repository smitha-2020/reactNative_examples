import { useEffect, useState } from 'react';

import { MEALS } from '../data/dummy-data';
import { FilterBySearchProps } from '../navigation/types';
import { Meal } from '../models/meal';

/**Hook used for searching,filtering before moving to Redux */

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
    const recipeMatched = ({
      filteredMeal,
      searchTextLower,
    }: {
      filteredMeal: Meal;
      searchTextLower: string;
    }) => {
      return (
        filteredMeal.title.toLowerCase().includes(searchTextLower) ||
        filteredMeal.steps.some((step: string) =>
          step.toLowerCase().includes(searchTextLower),
        ) ||
        filteredMeal.ingredients.some((ingredient: string) =>
          ingredient.toLowerCase().includes(searchTextLower),
        )
      );
    };

    const categoryMatched = ({
      filteredMeal,
      categoryId,
    }: {
      filteredMeal: Meal;
      categoryId: string;
    }) => {
      return filteredMeal.categoryIds.includes(categoryId);
    };

    const filterBySearch = () => {
      try {
        if (recipeId && !checked) {
          return MEALS.filter(recipe => recipe.id === recipeId);
        } else if (categoryId && searchText !== undefined) {
          const searchTextLower = searchText?.toLowerCase();

          return MEALS.filter(filteredMeal => {
            const recipeMatch = recipeMatched({
              filteredMeal,
              searchTextLower,
            });

            const categoryMatch = categoryMatched({ filteredMeal, categoryId });

            const labelMatch = filteredMeal[checked as keyof Meal] === true;

            return checked
              ? categoryMatch && recipeMatch && labelMatch
              : categoryMatch && recipeMatch;
          });
        }
      } catch (err) {
        console.log(`Exception while doing something: ${err}`);
        setError('An Error Occured while filtering recipes');
        setLoading(false);
      }
    };
    const recipes: Meal[] = filterBySearch() ?? [];
    setRecipeList(recipes);
    setLoading(false);
  }, [searchText, categoryId, recipeId, checked]);

  return { recipeList, loading, error };
};
