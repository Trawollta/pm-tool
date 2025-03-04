import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calender-widget',
  imports: [CommonModule],
  templateUrl: './calender-widget.component.html',
  styleUrl: './calender-widget.component.scss'
})
export class CalendarWidgetComponent {
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth(); // 0-indexed
  daysInMonth: number = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

  get days(): number[] {
    return Array.from({ length: this.daysInMonth }, (_, i) => i + 1);
  }
}
