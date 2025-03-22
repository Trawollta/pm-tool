import { createAction, props } from '@ngrx/store';
import { Category } from '../../models/category';

// Load Categories
export const loadCategories = createAction('[Category] Load Categories');
export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: Category[] }>()
);
export const loadCategoriesFailure = createAction(
  '[Category] Load Categories Failure',
  props<{ error: string }>()
);

// Create Category
export const createCategory = createAction(
  '[Category] Create Category',
  props<{ category: { name: string; color: string } }>()
);

export const createCategorySuccess = createAction(
  '[Category] Create Category Success',
  props<{ category: Category }>()
);

export const createCategoryFailure = createAction(
  '[Category] Create Category Failure',
  props<{ error: string }>()
);
