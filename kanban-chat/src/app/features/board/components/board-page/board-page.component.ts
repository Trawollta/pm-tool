import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskData } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadTasks } from '../../store/task.actions';
import { selectAllTasks } from '../../store/task.selectors';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  tasks$!: Observable<TaskData[]>;

  toDo: TaskData[] = [];
  inProgress: TaskData[] = [];
  waitForFeedback: TaskData[] = [];
  done: TaskData[] = [];

  showDropdown = false;

  constructor(private taskService: TaskService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    this.tasks$ = this.store.select(selectAllTasks);

    this.tasks$.subscribe(tasks => {
      console.log('Tasks im Store:', tasks);
      this.toDo = tasks.filter(task => task.labels && task.labels.includes('To Do'));
      this.inProgress = tasks.filter(task => task.labels && task.labels.includes('In Progress'));
      this.waitForFeedback = tasks.filter(task => task.labels && task.labels.includes('Wait for Feedback'));
      this.done = tasks.filter(task => task.labels && task.labels.includes('Done'));
    });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
