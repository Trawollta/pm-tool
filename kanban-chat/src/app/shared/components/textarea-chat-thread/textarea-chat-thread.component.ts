import { Component, OnInit } from '@angular/core';
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
  conversationType: 'channel' | 'direct' = 'channel'; // z. B. default: 'channel'
  conversationId = 1; // Bsp: hier kommt die Channel- oder DM-ID rein
  currentUserId = 1; // Bsp: hier kommt der eingeloggte User rein

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
      senderId: this.currentUserId,
      content,
      timestamp: new Date().toISOString(),
      conversationType: this.conversationType,
      conversationId: this.conversationId
    };

    this.store.dispatch(createMessage({ message: newMessage }));
    this.chatForm.reset();
  }
}
