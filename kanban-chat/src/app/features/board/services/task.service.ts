import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskData } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks';

  constructor(private http: HttpClient) {}

  createTask(taskData: TaskData): Observable<TaskData> {
    return this.http.post<TaskData>(this.apiUrl, taskData).pipe(
      map(task => this.transformTask(task))
    );
  }

  getTasks(): Observable<TaskData[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(tasks => tasks.map(task => this.transformTask(task)))
    );
  }

  private transformTask(task: any): TaskData {
    console.log('Transforming task:', task);
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      comments: task.comments,
      assignees: task.assignees,
      labels: (task.labels && task.labels.length > 0) ? task.labels : [task.status],
      progress: task.progress,
      creator: task.creator,
      category_id: task.category_id,
      category: task.category ? {
        id: task.category.id,
        name: task.category.name,
        color: task.category.color
      } : null,
      board_id: task.board_id
    };
  }
}
