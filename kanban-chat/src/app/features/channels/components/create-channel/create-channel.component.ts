import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChannelService } from '../../services/channel.service';
import { User } from '../../../auth/models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { selectAllUsers } from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-create-channel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.scss'],
})
export class CreateChannelComponent {
  @Output() channelCreated = new EventEmitter<void>();

  channelName = '';
  channelDescription = '';
  selectedUsers: number[] = [];
  users$: Observable<User[]>;

  constructor(private channelService: ChannelService, private store: Store) {
    this.users$ = this.store.select(selectAllUsers); // User-Daten aus dem Store holen
  }

  closeOverlay() {
    this.channelCreated.emit(); // Schließt das Overlay im Parent-Component
  }

  createChannel() {
    const newChannel = {
      name: this.channelName,
      description: this.channelDescription,
      creator: "1",
      members: this.selectedUsers,
    };
  
    this.channelService.createChannel(newChannel).subscribe(() => {
      this.channelCreated.emit(); // Overlay schließen
    });
  }
}
