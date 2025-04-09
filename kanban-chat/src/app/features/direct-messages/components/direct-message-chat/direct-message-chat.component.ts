import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../../../auth/store/app.state';
import { User } from '../../../auth/models/user.model';
import { selectAllUsers } from '../../../auth/store/auth.selectors';
import { TextareaChatThreadComponent } from '../../../../shared/components/textarea-chat-thread/textarea-chat-thread.component';
import { AllMessagesComponent } from '../../../../shared/components/messages/all-messages/all-messages.component';
import { Message } from '../../../../shared/models/message.model';
import { selectAllMessages } from '../../../messages/store/messages.selector';

@Component({
  selector: 'app-direct-message-chat',
  standalone: true,
  imports: [CommonModule, TextareaChatThreadComponent, AllMessagesComponent],
  templateUrl: './direct-message-chat.component.html',
  styleUrl: './direct-message-chat.component.scss'
})
export class DirectMessageChatComponent implements OnInit {
  userId!: number;
  user$!: Observable<User | undefined>;
  messages$!: Observable<Message[]>;
  currentUserId = 1; // ← aus Login übernehmen später!

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.userId = +id;

        // Aktueller Benutzer (Empfänger)
        this.user$ = this.store.select(selectAllUsers).pipe(
          map((users: User[]) => users.find((user: User) => user.id === this.userId))
        );

        // Nachrichten für die Direktunterhaltung mit diesem User
        this.messages$ = this.store.select(selectAllMessages).pipe(
          map((messages: Message[]) =>
            messages.filter(
              msg =>
                msg.conversation_type === 'direct' &&
                ((msg.sender_id === this.currentUserId && msg.conversation_id === this.userId) ||
                 (msg.sender_id === this.userId && msg.conversation_id === this.currentUserId))
            )
          )
        );
      }
    });
  }
}
