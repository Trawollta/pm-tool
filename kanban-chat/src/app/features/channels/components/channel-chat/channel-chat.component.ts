import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AllMessagesComponent } from '../../../../shared/components/messages/all-messages/all-messages.component';
import { Channel } from '../../models/channels.model';
import { AppState } from '../../../auth/store/app.state';
import { selectChannelById } from '../../store/channels.selector';
import { loadMessages } from '../../../messages/store/messages.actions';
import { selectMessagesForConversation } from '../../../messages/store/messages.selector';
import { TextareaChatThreadComponent } from '../../../../shared/components/textarea-chat-thread/textarea-chat-thread.component';
import { Message } from '../../../../shared/models/message.model';

@Component({
  selector: 'app-channel-chat',
  standalone: true,
  imports: [CommonModule, AllMessagesComponent, TextareaChatThreadComponent],
  templateUrl: './channel-chat.component.html',
  styleUrls: ['./channel-chat.component.scss']
})
export class ChannelChatComponent implements OnInit, OnDestroy {
  channelId!: number;
  channel$!: Observable<Channel | undefined>;
  messages$!: Observable<Message[]>;
  private routeSub!: Subscription;
  currentUserId = 1;
  

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.channelId = Number(id);
        console.log('Selected Channel ID:', this.channelId);
        
        // Hole den Channel aus dem Store
        this.channel$ = this.store.select(selectChannelById(this.channelId));
  
        // Dispatch die Action, um Nachrichten zu laden, falls nötig
        this.store.dispatch(loadMessages({ conversationType: 'channel', conversationId: this.channelId }));
  
        // Verwende den Selector, um die Nachrichten für diesen Channel zu filtern
        this.messages$ = this.store.select(selectMessagesForConversation('channel', this.channelId));
      }
    });
  }
  

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
