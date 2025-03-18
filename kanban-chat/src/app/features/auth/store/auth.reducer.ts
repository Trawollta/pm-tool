import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import {
  clearUser,
  deleteUser,
  loginFailure,
  loginSuccess,
  logoutUser,
  setUser,
  updateUser,
  loadUsersSuccess
} from './auth.actions';

export interface AuthState {
  user: User | null;
  users: User[]; // 🔹 Liste aller Nutzer hinzugefügt
  token?: string | null;
  error?: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  users: [], // 🔹 Initialisiere die Nutzerliste als leeres Array
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { user, token }) => ({
    ...state,
    user: user,
    token: token || null,
    error: null
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    token: null,
    error: error
  })),
  on(logoutUser, state => ({
    ...state,
    user: null,
    token: null,
    error: null
  })),
  on(setUser, (state, { user }) => ({
    ...state,
    user: user,
    error: null
  })),
  on(clearUser, state => ({
    ...state,
    user: null,
    token: null,
    error: null
  })),
  on(updateUser, (state, { user }) => ({
    ...state,
    user: user,
    error: null
  })),
  on(deleteUser, state => ({
    ...state,
    user: null,
    token: null,
    error: null
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users, // 🔹 Nutzerliste im State aktualisieren
    error: null
  }))
);
