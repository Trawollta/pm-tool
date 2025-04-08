import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../../shared/models/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = 'http://localhost:8000/api/messages';

  constructor(private http: HttpClient) {}

  /**
   * Sendet eine neue Nachricht an das Backend (Laravel).
   * Wandelt camelCase -> snake_case um.
   */
  sendMessage(message: Message): Observable<Message> {
    const payload = {
      sender_id: message.sender_id,
      content: message.content,
      timestamp: message.timestamp,
      conversation_type: message.conversation_type,
      conversation_id: message.conversation_id
    };

    return this.http.post<Message>(this.apiUrl, payload);
  }

  /**
   * Lädt alle Nachrichten für eine bestimmte Konversation (Channel oder Direct).
   */
  getMessages(conversationType: 'channel' | 'direct', conversationId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}?conversation_type=${conversationType}&conversation_id=${conversationId}`);
  }
}
