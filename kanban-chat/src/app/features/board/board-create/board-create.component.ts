import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardService } from '../services/board.service';
import { Board } from '../models/board';
import { AppState } from '../../auth/store/app.state';
import { Store, select } from '@ngrx/store';
import { User } from '../../auth/models/user.model';
import { Observable } from 'rxjs';
import { loadUsers } from '../../auth/store/auth.actions';
import { selectAllUsers } from '../../auth/store/auth.selectors';

@Component({
  selector: 'app-board-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './board-create.component.html',
  styleUrls: ['./board-create.component.scss']
})
export class BoardCreateComponent implements OnInit {
  board: Board = {
    name: '',
    description: '',
    participants: []
  };

  // Observable, das die Benutzer aus dem Store liefert
  users$!: Observable<User[]>;
  participantsInput: string = '';
  showUserDropdown: boolean = false;

  constructor(
    private boardService: BoardService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    // Dispatch der Aktion zum Laden der Benutzer
    this.store.dispatch(loadUsers());
    // Selektiere die Benutzer aus dem Store
    this.users$ = this.store.pipe(select(selectAllUsers));
    this.users$.subscribe(users => console.log('Geladene Benutzer:', users));
  }

  toggleUserDropdown(): void {
    this.showUserDropdown = !this.showUserDropdown;
  }

  isUserSelected(userId: number): boolean {
    return (this.board.participants ?? []).includes(userId);
  }

  onUserCheckboxChange(event: any): void {
    const userId = Number(event.target.value);
    if (event.target.checked) {
      if (!(this.board.participants ?? []).includes(userId)) {
        (this.board.participants = this.board.participants || []).push(userId);
      }
    } else {
      this.board.participants = (this.board.participants || []).filter(id => id !== userId);
    }
  }
  createBoard() {
    // board.participants enthält nun direkt die ausgewählten User-IDs
    this.boardService.createBoard(this.board).subscribe({
      next: (res) => {
        console.log('Board erfolgreich erstellt:', res);
        // Hier kannst du beispielsweise eine Weiterleitung einbauen
      },
      error: (err) => {
        console.error('Fehler beim Erstellen:', err);
      }
    });
  }
}
