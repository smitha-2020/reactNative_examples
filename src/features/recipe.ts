import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MEALS } from '../data/dummy-data';
import { AllergyTypes, FilterBySearch, RecipeState } from '../navigation/types';

const initialState: RecipeState = {
  value: MEALS,
  filterdMeals: MEALS,
  loading: false,
  error: null,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    applyFilter: (state, action: PayloadAction<FilterBySearch>) => {
      const searchText = action.payload.searchText?.toLowerCase() ?? '';
      const selectedKey = action.payload.checked
        ? (Object.keys(action.payload.checked) as AllergyTypes[]).find(
            key => action.payload.checked?.[key] === true,
          )
        : undefined;

      state.filterdMeals = state.value.filter(recipe => {
        //filtered By categoryiD
        const filteredByCategoryId = recipe.categoryIds.includes(
          action.payload.categoryId,
        );
        //filtered by searchText
        const filteredBySearchText =
          recipe.title.toLowerCase().includes(searchText) ||
          recipe.steps.some((step: string) =>
            step.toLowerCase().includes(searchText),
          ) ||
          recipe.ingredients.some((ingredient: string) =>
            ingredient.toLowerCase().includes(searchText),
          );

        //filtered by allergic contents
        const filteredByAllergy = selectedKey
          ? recipe[selectedKey] === true
          : [];

        return (
          filteredByCategoryId && filteredBySearchText && filteredByAllergy
        );
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { applyFilter } = recipeSlice.actions;

export default recipeSlice.reducer;
