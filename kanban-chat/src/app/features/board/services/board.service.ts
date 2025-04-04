// src/app/features/board/board.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private apiUrl = 'http://localhost:8000/api/boards';

  constructor(private http: HttpClient) {}

  // 🆕 Neues Board erstellen
  createBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.apiUrl, board);
  }

  // 📄 Alle Boards abrufen
  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.apiUrl);
  }

  // 🔍 Einzelnes Board abrufen
  getBoard(id: number): Observable<Board> {
    return this.http.get<Board>(`${this.apiUrl}/${id}`);
  }

  // ✏️ Board aktualisieren
  updateBoard(id: number, board: Board): Observable<Board> {
    return this.http.put<Board>(`${this.apiUrl}/${id}`, board);
  }

  // ❌ Board löschen
  deleteBoard(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
