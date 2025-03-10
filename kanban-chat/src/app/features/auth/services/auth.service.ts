import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Simuliert einen Login, indem ein Dummy-User und ein Token zurückgegeben werden.
   * Die Methode verzögert die Antwort um 1 Sekunde, um eine echte API-Verzögerung nachzuahmen.
   */
  login(email: string, password: string): Observable<{ user: User; token: string }> {
    const dummyUser: User = new User({
      id: 1,
      name: 'Max Mustermann',
      password: 'secret',
      email: 'max@example.com',
      isActive: true,
      img: 'assets/img/avatars/default.svg',
      relatedChats: []
    });

    // Rückgabe des Dummy-Users und Tokens nach einer Verzögerung von 1000ms
    return of({ user: dummyUser, token: 'dummy-token' }).pipe(delay(1000));
  }
}
