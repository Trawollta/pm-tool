import { createSelector } from '@ngrx/store';
import { AppState } from '../../../auth/store/app.state';
import { CategoryState } from './caetegory.reducer';

export const selectCategoryState = (state: AppState) => state.categories;

export const selectAllCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);

export const selectCategoryLoading = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.loading
);

export const selectCategoryError = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.error
);
