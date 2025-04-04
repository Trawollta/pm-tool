import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskData } from '../../models/task';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../store/task-store/task.selectors';
import { loadTasks } from '../../store/task-store/task.actions';
import { Board } from '../../models/board';
import { BoardService } from '../../services/board.service';
import { RouterLink } from '@angular/router';
import { BoardCreateComponent } from '../../board-create/board-create.component';

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CommonModule, TaskCardComponent, RouterLink, BoardCreateComponent],
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
  showDropdown = false;
  tasks$!: Observable<TaskData[]>;
  toDo: TaskData[] = [];
  inProgress: TaskData[] = [];
  waitForFeedback: TaskData[] = [];
  done: TaskData[] = [];

  boards: Board[] = [];
  selectedBoardId: number = 0;
  openCreateBoard: boolean = false;

  constructor(private store: Store, private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.getBoards().subscribe(boards => {
      this.boards = boards;
      const firstBoard = boards.find(b => typeof b.id === 'number');
      if (firstBoard && firstBoard.id !== undefined) {
        this.setActiveBoard(firstBoard.id);
      }
    });
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  setActiveBoard(boardId: number) {
    this.selectedBoardId = boardId;
    this.store.dispatch(loadTasks());

    this.tasks$ = this.store.select(selectAllTasks);
    this.tasks$.subscribe(tasks => {
      const filtered = tasks.filter(task => task.board_id === this.selectedBoardId);
      this.toDo = filtered.filter(task => task.labels?.includes('To Do'));
      this.inProgress = filtered.filter(task => task.labels?.includes('In Progress'));
      this.waitForFeedback = filtered.filter(task => task.labels?.includes('Wait for Feedback'));
      this.done = filtered.filter(task => task.labels?.includes('Done'));
    });
  }

  onBoardSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = Number(selectElement.value);
    this.setActiveBoard(selectedValue);
  }
  
}
