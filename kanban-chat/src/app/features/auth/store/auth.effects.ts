import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { AppState } from './app.state';
import { loadUsers, loadUsersFailure, loadUsersSuccess, loginFailure, loginSuccess, loginUser, signUpFailure, signUpSuccess, signUpUser } from './auth.actions';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,  
    private router: Router,
    private store: Store<AppState>
  ) {}

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          tap(response => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
          }),
          map(response => loginSuccess({ user: response.user, token: response.token })),
          catchError(error => of(loginFailure({ error: error.message || 'Login failed' })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap(() => {
        this.router.navigate(['/dashboard']);
      })
    ),
    { dispatch: false }
  );


  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.authService.getUsers().pipe(
          tap(users => console.log('Geladene Benutzer im Effekt:', users)),
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error: error.message })))
        )
      )
    )
  );

  signUpUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUpUser),
      mergeMap(({ name, email, password }) =>
        this.authService.signUp(name, email, password).pipe(
          tap(response => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
          }),
          map(response => signUpSuccess({ user: response.user, token: response.token })),
          catchError(error => of(signUpFailure({ error: error.message || 'Signup failed' })))
        )
      )
    )
  );

  // Weitere Effekte (logoutUser$, etc.)...
}
