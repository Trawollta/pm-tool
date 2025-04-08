import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppState } from '../../../features/auth/store/app.state';
import { Message } from '../../models/message.model';
import { createMessage } from '../../../features/messages/store/messages.actions';

@Component({
  selector: 'app-textarea-chat-thread',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textarea-chat-thread.component.html',
  styleUrls: ['./textarea-chat-thread.component.scss']
})
export class TextareaChatThreadComponent implements OnInit {
  chatForm!: FormGroup;
  @Input() conversationType: 'channel' | 'direct' = 'channel';
  @Input() conversationId!: number;
  @Input() currentUserId!: number;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    // Einfaches Formular
    this.chatForm = this.fb.group({
      content: ['']
    });
  }

  onSendMessage(): void {
    const content = this.chatForm.value.content.trim();
    if (!content) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(), 
      sender_id: this.currentUserId,
      content,
      timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
      conversation_type: this.conversationType,
      conversation_id: this.conversationId
    };

    this.store.dispatch(createMessage({ message: newMessage }));
    this.chatForm.reset();
  }
}
