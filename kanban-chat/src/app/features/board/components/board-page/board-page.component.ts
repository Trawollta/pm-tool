import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskCardComponent, TaskData } from '../task-card/task-card.component';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent {
  
  showDropdown = false;

  tasklyReady: TaskData[] = [
    {
      id: 1,
      title: 'Exploration UI Mobile',
      description: 'This is a project that helps you complete',
      dueDate: '08 Feb 2024',
      comments: 4,
      labels: ['On Progress'],
      assignees: [
        'https://i.pravatar.cc/30?img=1',
        'https://i.pravatar.cc/30?img=2'
      ]
    },
    {
      id: 2,
      title: 'Dashboard Finance',
      description: 'This is a project that helps you complete',
      dueDate: '06 Feb 2024',
      comments: 8,
      labels: ['On Progress'],
      assignees: [
        'https://i.pravatar.cc/30?img=3'
      ]
    }
  ];

  inProgress: TaskData[] = [
    {
      id: 3,
      title: 'UI Finance Mobile',
      description: 'This is a project that helps you complete',
      dueDate: '05 Feb 2024',
      comments: 2,
      labels: ['On Progress'],
      assignees: [
        'https://i.pravatar.cc/30?img=4',
        'https://i.pravatar.cc/30?img=5'
      ]
    }
  ];

  waitForFeedback: TaskData[] = [
    {
      id: 5,
      title: 'Some Feature',
      description: 'Warte auf Feedback vom Team',
      dueDate: '03 Feb 2024',
      comments: 1,
      labels: ['Waiting'],
      assignees: [
        'https://i.pravatar.cc/30?img=6'
      ]
    }
  ];

  done: TaskData[] = [
    {
      id: 4,
      title: 'Another Task',
      description: 'Beschreibung für Task 4',
      dueDate: '01 Feb 2024',
      comments: 3,
      labels: ['Done'],
      assignees: [
        'https://i.pravatar.cc/30?img=7'
      ]
    }
  ];

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
