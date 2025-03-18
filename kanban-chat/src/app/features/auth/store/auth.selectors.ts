import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: any) => state.auth;

export const selectAllUsers = createSelector(
  selectAuthState,
  (state: AuthState) => state.users
);