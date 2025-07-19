import { useCallback } from 'react';
import { useAppDispatch } from '../app/hooks';
import { applyFilter } from '../features/recipe';
import { FilterBySearch } from '../navigation/types';

export const useReduxReducerFilter = () => {
  const dispatch = useAppDispatch();

  const filterByParams = useCallback(
    ({ categoryId, searchText, checked }: FilterBySearch) => {
      dispatch(applyFilter({ categoryId, searchText, checked }));
    },
    [],
  );

  return { filterByParams };
};
