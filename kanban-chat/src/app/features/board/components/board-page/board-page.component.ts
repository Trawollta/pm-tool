// board-page.component.ts
import { Component, OnInit, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskData } from '../../models/task';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../store/task-store/task.selectors';
import { loadTasks, updateTask } from '../../store/task-store/task.actions';
import { Board } from '../../models/board';
import { BoardService } from '../../services/board.service';
import { RouterLink } from '@angular/router';
import { BoardCreateComponent } from '../../board-create/board-create.component';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent,
    RouterLink,
    BoardCreateComponent,
    CreateTaskDialogComponent,
  ],
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  private store = inject(Store);

  boards: Board[] = [];
  selectedBoardId = signal<number>(0);
  draggedTask = signal<TaskData | null>(null);

  showDropdown = false;
  openCreateBoard = false;
  openTaskDialog = false;

  tasks = toSignal(this.store.select(selectAllTasks), { initialValue: [] });

  filteredTasks = computed(() =>
    this.tasks().filter((task: TaskData) => task.board_id === this.selectedBoardId())
  );

  toDo = computed(() =>
    this.filteredTasks().filter((task: TaskData) => task.labels?.includes('To Do'))
  );
  inProgress = computed(() =>
    this.filteredTasks().filter((task: TaskData) => task.labels?.includes('In Progress'))
  );
  waitForFeedback = computed(() =>
    this.filteredTasks().filter((task: TaskData) => task.labels?.includes('Wait for Feedback'))
  );
  done = computed(() =>
    this.filteredTasks().filter((task: TaskData) => task.labels?.includes('Done'))
  );

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.getBoards().subscribe((boards: Board[]) => {
      this.boards = boards;
      const firstBoard = boards.find(b => typeof b.id === 'number');
      if (firstBoard?.id !== undefined) {
        this.setActiveBoard(firstBoard.id);
      }
    });

    this.store.dispatch(loadTasks());
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  setActiveBoard(boardId: number) {
    this.selectedBoardId.set(boardId);
  }

  onBoardSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = Number(selectElement.value);
    this.setActiveBoard(selectedValue);
  }

  onTaskCreated(task: TaskData): void {
    console.log('New task created:', task);
    this.openTaskDialog = false;
  }

  onDragStart(event: DragEvent, task: TaskData): void {
    this.draggedTask.set(task);
    event.dataTransfer?.setData('text/plain', task.id.toString()); // nötig für Firefox/Safari
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, status: string): void {
    event.preventDefault();
    const taskId = event.dataTransfer?.getData('text/plain');
    const task = this.tasks().find(t => t.id?.toString() === taskId);
  
    if (task) {
      const updatedTask: TaskData = {
        ...task,
        labels: [status]
      };
      this.store.dispatch(updateTask({ task: updatedTask }));
    }
  }
}
