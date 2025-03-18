import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calender-widget',
  imports: [CommonModule, FormsModule],
  templateUrl: './calender-widget.component.html',
  styleUrl: './calender-widget.component.scss'
})
export class CalendarWidgetComponent {
  // Array mit Monatsnamen (Index 0 = Januar, 1 = Februar usw.)
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Array mit Wochentags-Kürzeln, wie im Screenshot (SU, MO, ...)
  dayLabels = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  // Erlaubte Jahre (z.B. 2023 bis 2026) - passe nach Bedarf an
  yearRange = [2023, 2024, 2025, 2026];

  // Aktuell gewähltes Datum
  currentMonth = new Date().getMonth();  // 0-11
  currentYear = new Date().getFullYear();

  // Array, das alle angezeigten Tage enthält
  // (enthält Objekte mit dayNumber und ggf. Infos über das Datum)
  days: { date: number; month: number; year: number }[] = [];

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    this.days = [];

    // 1. Ersten Tag des Monats herausfinden
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const startDay = firstDayOfMonth.getDay(); // Wochentag (0 = So, 1 = Mo, ...)

    // 2. Anzahl Tage im aktuellen Monat
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    // 3. Fülle ggf. leere Felder vor dem 1. Tag (falls der Monat nicht am Sonntag startet)
    for (let i = 0; i < startDay; i++) {
      this.days.push({ date: 0, month: this.currentMonth, year: this.currentYear });
    }

    // 4. Fülle die echten Tageszahlen
    for (let day = 1; day <= daysInMonth; day++) {
      this.days.push({ date: day, month: this.currentMonth, year: this.currentYear });
    }
  }

  // Vorheriger Monat
  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.updateCalendar();
  }

  // Nächster Monat
  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.updateCalendar();
  }

  // Prüfen, ob ein Tag dem heutigen Datum entspricht
  isToday(dayObj: { date: number; month: number; year: number }): boolean {
    const today = new Date();
    return (
      dayObj.date === today.getDate() &&
      dayObj.month === today.getMonth() &&
      dayObj.year === today.getFullYear()
    );
  }
}
