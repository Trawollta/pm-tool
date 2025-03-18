import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskCardComponent} from '../task-card/task-card.component';
import { TASK_DUMMY } from '../../models/task-dummy';
import { TaskData } from '../../models/task';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent {


  toDo: TaskData[] = TASK_DUMMY.filter(task => task.labels?.includes('To Do'));
  inProgress: TaskData[] = TASK_DUMMY.filter(task => task.labels?.includes('In Progress'));
  waitForFeedback: TaskData[] = TASK_DUMMY.filter(task => task.labels?.includes('Waiting'));
  done: TaskData[] = TASK_DUMMY.filter(task => task.labels?.includes('Done'));
  
  showDropdown = false;



  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
