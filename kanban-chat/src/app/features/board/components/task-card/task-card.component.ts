import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskData } from '../../models/task';


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
