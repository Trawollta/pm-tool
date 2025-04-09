import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../auth/models/user.model';
import { AppState } from '../../../auth/store/app.state';
import { selectAllUsers } from '../../../auth/store/auth.selectors';
import { loadUsers } from '../../../auth/store/auth.actions';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DirectMessageChatComponent } from '../direct-message-chat/direct-message-chat.component';

@Component({
  selector: 'app-direct-message-list',
  standalone: true,
  imports: [CommonModule, RouterLink, DirectMessageChatComponent],
  templateUrl: './direct-message-list.component.html',
  styleUrls: ['./direct-message-list.component.scss']
})
export class DirectMessageListComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit(): void {
    this.users$.subscribe(users => {
      if (!users || users.length === 0) {
        this.store.dispatch(loadUsers());
      }
    });
  }
}
