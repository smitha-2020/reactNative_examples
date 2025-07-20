import { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';

import { Meal } from '../models/meal';
import { useReduxReducerFilter } from './useReduxReducerFilter';
import { AllergyTypes } from '../navigation/types';

export const useFilters = ({
  categoryId,
  searchText,
  checked,
}: {
  categoryId: string;
  searchText: string;
  checked: Record<AllergyTypes, boolean>;
}) => {
  let meals: Meal[] = useAppSelector(state => state.RecipeReducer.filterdMeals);

  const { filterByParams } = useReduxReducerFilter();

  useEffect(() => {
    filterByParams({ categoryId, searchText, checked });
  }, [categoryId, searchText, checked]);

  return { meals };
};
