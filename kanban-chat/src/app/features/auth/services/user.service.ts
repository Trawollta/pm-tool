import { Injectable } from '@angular/core';
import { DUMMY_USER } from '../models/dummy.user';
import { User } from '../models/user.model';
import { delay, Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
  private user: User = DUMMY_USER;

  getUser(): User {
    return this.user;
  }

  login(email: string, password: string): Observable<{ user: User; token: string }> {
    const dummyUser: User = new User({
      id: 1,
      name: 'Max Mustermann',
      email: email,
      isActive: true,
      img: 'assets/img/avatars/default.svg',
      relatedChats: []
    });
    // Simuliere eine Verzögerung von 1 Sekunde
    return of({ user: dummyUser, token: 'dummy-token' }).pipe(delay(1000));
  }
}