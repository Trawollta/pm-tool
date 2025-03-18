import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppState } from '../../../auth/store/app.state';
import { Channel } from '../../models/channels.model';
import { loadChannels } from '../../store/channels.actions';
import { selectAllChannels, selectChannelsError, selectChannelsLoading } from '../../store/channels.selector';
import { AllMessagesComponent } from "../../../../shared/components/messages/all-messages/all-messages.component";
import { ChannelChatComponent } from "../channel-chat/channel-chat.component";
import { Router } from '@angular/router';
import { CreateChannelComponent } from '../create-channel/create-channel.component';

@Component({
  selector: 'app-channel-list',
  standalone: true,
  imports: [CommonModule, CreateChannelComponent],
  templateUrl: './channel-list.component.html', // Vorlage in einer separaten HTML-Datei
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {
  channels$!: Observable<Channel[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  isCreateChannelOpen = false;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    // Selektoren abonnieren, um Channels, Lade-Status und Fehler abzurufen
    this.channels$ = this.store.select(selectAllChannels);
    this.loading$ = this.store.select(selectChannelsLoading);
    this.error$ = this.store.select(selectChannelsError);

    // Aktion dispatchen, um Channels zu laden (Dummy-Daten werden im Effekt simuliert)
    this.store.dispatch(loadChannels());
  }

  onChannelClick(channel: Channel): void {
    // Navigiere zur dynamischen Route, z. B. /channel/1
    this.router.navigate(['/channel', channel.id]);
  }

  openCreateChannel() {
    this.isCreateChannelOpen = true;
  }

  reloadChannels() {
    this.isCreateChannelOpen = false;
    this.store.dispatch(loadChannels());
  }
}
