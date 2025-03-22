import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { createCategory, createCategoryFailure, createCategorySuccess, loadCategories, loadCategoriesFailure, loadCategoriesSuccess } from './caetegory.actions';
import { CategoryService } from '../../services/category.service';

@Injectable()
export class CategoryEffects {
  constructor(private actions$: Actions, private categoryService: CategoryService) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCategories),
      mergeMap(() =>
        this.categoryService.getCategories().pipe(
          map(categories => loadCategoriesSuccess({ categories })),
          catchError(error => of(loadCategoriesFailure({ error: error.message })))
        )
      )
    )
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCategory),
      mergeMap(({ category }) =>
        this.categoryService.createCategory(category).pipe(
          map(newCategory => createCategorySuccess({ category: newCategory })),
          catchError(error => of(createCategoryFailure({ error: error.message })))
        )
      )
    )
  );
  
  refreshCategoriesAfterCreate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCategorySuccess),
      map(() => loadCategories())
    )
  );
  
}
