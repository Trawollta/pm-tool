import { Component, ChangeDetectorRef, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Message } from '../../../models/message.model';
import { CurrentUserMessageComponent } from '../current-user-message/current-user-message.component';
import { OtherUserMessageComponent } from '../other-user-message/other-user-message.component';

@Component({
  selector: 'app-all-messages',
  standalone: true,
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.scss'],
  imports: [
    CommonModule,
    CurrentUserMessageComponent,
    OtherUserMessageComponent
  ]
})
export class AllMessagesComponent  {
  @Input() messages: Message[] = [];
  @Input() currentUserId!: number;
  @ViewChild('endOfMessages') endOfMessages!: ElementRef;


  trackByMsg(index: number, msg: Message): number {
    return msg.id; 
    // oder ein anderer eindeutiger Wert, z. B. msg.timestamp
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  
  scrollToBottom(): void {
    try {
      this.endOfMessages.nativeElement.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {}
  }

}
