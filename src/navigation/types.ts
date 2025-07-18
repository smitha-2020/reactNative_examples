export type RouteStackParamList = {
  LandingPage: undefined;
  HomeScreen: undefined;
  DetailsScreen: {
    categoryId: string;
  };
  IndividualDetailScreen: {
    recipeId: string;
  };

  // add other routes here
};

export class Meal {
  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: 'affordable' | 'pricey' | 'luxurious',
    public complexity: 'simple' | 'challenging' | 'hard',
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean,
  ) {}
}

export type FilterBySearchProps = {
  searchText?: string;
  categoryId?: string;
  recipeId?: string;
  checked?: string;
};
