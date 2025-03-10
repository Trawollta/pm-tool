import { Component, Input } from '@angular/core';
import { Message } from '../../../models/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-user-message',
  imports: [CommonModule],
  templateUrl: './other-user-message.component.html',
  styleUrl: './other-user-message.component.scss'
})
export class OtherUserMessageComponent {

  @Input() message!: Message;

}
