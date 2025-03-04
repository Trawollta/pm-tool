import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.scss']
})
export class InfoWidgetComponent {
  // Beispielhafte allgemeine Infos
  info = {
    welcomeMessage: 'Willkommen zurück, Jan!',
    upcomingMeeting: 'Team Meeting um 14:00 Uhr',
    notifications: 3
  };
}
