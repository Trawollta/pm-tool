import { createReducer, on } from '@ngrx/store';
import { loadCategories, loadCategoriesFailure, loadCategoriesSuccess } from './caetegory.actions';
import { Category } from '../../models/category';

export interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

export const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

export const categoryReducer = createReducer(
  initialState,
  on(loadCategories, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
    loading: false,
  })),
  on(loadCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
