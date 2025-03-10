import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TaskData {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
  comments?: number;     
  assignees?: string[];
  labels?: string[];
}

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task!: TaskData;
}
