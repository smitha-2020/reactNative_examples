import { Meal } from '../models/meal';

export type RouteStackParamList = {
  LandingPage: undefined;
  HomeScreen: undefined;
  DetailsScreen: {
    categoryId: string;
  };
  IndividualDetailScreen: {
    recipeId: string;
  };
};

export type FavStackParamList = {
  FavoriteListScreen: undefined;
  IndividualDetailScreen: {
    recipeId: string;
  };
};

export type FilterBySearchProps = {
  searchText?: string;
  categoryId?: string;
  recipeId?: string;
  checked?: string;
};

export type FilterBySearch = {
  categoryId: string;
  searchText?: string;
  checked?: Record<AllergyTypes, boolean>;
};

export type AllergyTypes =
  | 'isVegan'
  | 'isVegetarian'
  | 'isGlutenFree'
  | 'isLactoseFree';

export interface RecipeState {
  value: Meal[];
  filterdMeals: Meal[];
  favoriteIds: string[];
  loading: boolean;
  error: string | null;
}
