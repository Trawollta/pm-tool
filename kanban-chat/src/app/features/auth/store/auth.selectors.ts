import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: AppState) => state.auth;

export const selectAllUsers = createSelector(
  selectAuthState,
  (state: AuthState) => state.users
);