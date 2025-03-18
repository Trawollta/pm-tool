import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/users';


  constructor(private http: HttpClient) {}
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

  signUp(name: string, email: string, password: string): Observable<{ user: User; token: string }> {
    const payload = { name, email, password };
    // Passe den Endpunkt je nach deinem Backend an (z. B. /register)
    return this.http.post<{ user: User; token: string }>(`${this.apiUrl}/register`, payload);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }
}
