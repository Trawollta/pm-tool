import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subtask } from '../models/subtask';

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {
  private apiUrl = 'http://localhost:8000/api/subtasks';

  constructor(private http: HttpClient) {}

  getSubtasks(taskId: number): Observable<Subtask[]> {
    return this.http.get<Subtask[]>(`${this.apiUrl}?task_id=${taskId}`);
  }
  

  createSubtask(subtask: Partial<Subtask>): Observable<Subtask> {
    return this.http.post<Subtask>(this.apiUrl, subtask);
  }

  updateSubtask(id: number, subtask: Partial<Subtask>): Observable<Subtask> {
    return this.http.put<Subtask>(`${this.apiUrl}/${id}`, subtask);
  }

  deleteSubtask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
