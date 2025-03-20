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
  
  
  login(email: string, password: string): Observable<{ user: User; token: string }> {
    const payload = { email, password };
    return this.http.post<{ user: User; token: string }>(`${this.apiUrl}/login`, payload);
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
