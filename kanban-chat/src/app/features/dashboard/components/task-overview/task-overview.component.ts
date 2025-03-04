import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  dueDate: Date;
  status: 'open' | 'in-progress' | 'done';
}


@Component({
  selector: 'app-task-overview',
  imports: [CommonModule],
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.scss'
})
export class TasksOverviewComponent {
  // Beispielhafte offene Tasks (später aus dem Store oder Service)
  tasks: Task[] = [
    { id: 1, title: 'Review Code', dueDate: new Date(), status: 'open' },
    { id: 2, title: 'Update Dokumentation', dueDate: new Date(), status: 'open' },
    { id: 3, title: 'Team Meeting vorbereiten', dueDate: new Date(), status: 'in-progress' },
  ];

  get openTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'open');
  }
}
