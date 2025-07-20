import { configureStore } from '@reduxjs/toolkit';
import RecipeReducer from '../redux/slices/recipeSlice';

export const store = configureStore({
  reducer: { RecipeReducer },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
