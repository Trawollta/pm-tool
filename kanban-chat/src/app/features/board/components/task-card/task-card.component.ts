import { Component, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
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

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // TaskCard wird dragfähig
    this.renderer.setAttribute(this.el.nativeElement, 'draggable', 'true');
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {
    if (event.dataTransfer && this.task?.id) {
      event.dataTransfer.setData('text/plain', this.task.id.toString());
      event.dataTransfer.effectAllowed = 'move';
    }
  }
}
