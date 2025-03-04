import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChannelChatComponent } from './features/channels/components/channel-chat/channel-chat.component';
import { WorkspaceMenuComponent } from './core/layout/workspace-menu/workspace-menu.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, 
      // ChannelChatComponent,
      WorkspaceMenuComponent,
      CommonModule,
      FooterComponent,
      HeaderComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-chat';
}
