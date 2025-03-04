import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarWidgetComponent } from './components/calender-widget/calender-widget.component';
import { InfoWidgetComponent } from './components/info-widget/info-widget.component';
import { TasksOverviewComponent } from './components/task-overview/task-overview.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CalendarWidgetComponent,
    TasksOverviewComponent,
    InfoWidgetComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Hier kannst du später Daten vom Store oder Service laden
  }
}
