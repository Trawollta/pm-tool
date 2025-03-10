import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
// import { User } from 'app/models/user.class';

/** 🔹 Login-Versuch starten */
export const loginUser = createAction(
  '[Auth] Login User',
  props<{ email: string; password: string }>()
);

/** 🔹 Login erfolgreich */
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User; token?: string }>() // ✅ token ist jetzt optional
);

/** 🔹 Login fehlgeschlagen */
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

/** 🔹 Logout */
export const logoutUser = createAction('[Auth] Logout User');

/** 🔹 User setzen */
export const setUser = createAction(
  '[Auth] Set User',
  props<{ user: User }>()
);

/** 🔹 User aus dem Store entfernen (Logout) */
export const clearUser = createAction(
  '[Auth] Clear User');


export const updateUser = createAction(
    '[Auth] Update User',
    props<{ user: User }>()
  ); 

export const deleteUser = createAction(
    '[Auth] Delete User',
    props<{ userId: number }>() // ID des zu löschenden Benutzers
  );



