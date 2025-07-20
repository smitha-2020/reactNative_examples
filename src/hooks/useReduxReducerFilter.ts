import { useCallback } from 'react';
import { useAppDispatch } from '../app/hooks';
import { addFavourite, applyFilter } from '../redux/slices/recipeSlice';
import { FilterBySearch } from '../navigation/types';

export const useReduxReducerFilter = () => {
  const dispatch = useAppDispatch();

  const filterByParams = useCallback(
    ({ categoryId, searchText, checked }: FilterBySearch) => {
      dispatch(applyFilter({ categoryId, searchText, checked }));
    },
    [],
  );

  const addFav = useCallback(({ recipeId }: { recipeId: string }) => {
    dispatch(addFavourite({ recipeId }));
  }, []);

  return { filterByParams, addFav };
};
