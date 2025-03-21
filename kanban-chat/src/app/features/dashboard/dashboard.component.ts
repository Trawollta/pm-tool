import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarWidgetComponent } from './components/calender-widget/calender-widget.component';
import { InfoWidgetComponent } from './components/info-widget/info-widget.component';
import { TasksOverviewComponent } from './components/task-overview/task-overview.component';
import { Store } from '@ngrx/store';
import { loadUsers } from '../auth/store/auth.actions';
import { loadTasks } from '../board/store/task.actions';
import { loadChannels } from '../channels/store/channels.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CalendarWidgetComponent,
    // TasksOverviewComponent,
    // InfoWidgetComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadTasks());
    this.store.dispatch(loadChannels());
  }
}
