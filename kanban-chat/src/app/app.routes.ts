import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BoardPageComponent } from './features/board/components/board-page/board-page.component';
import { ChannelChatComponent } from './features/channels/components/channel-chat/channel-chat.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { DirectMessagesComponent } from './features/direct-messages/direct-messages.component';
import { ChannelListComponent } from './features/channels/components/channel-list/channel-list.component';

export const routes: Routes = [
  // Auth-Bereich: Login und eventuell weitere Auth-Seiten
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      // z.B. { path: 'register', component: RegisterComponent },
      // { path: 'forgot-password', component: ForgotPasswordComponent },
    ]
  },
  // Hauptbereich: Seiten mit Header, Footer etc.
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'board', component: BoardPageComponent },
      { path: 'direct-messages', component: DirectMessagesComponent},
      { path: 'channel-list', component: ChannelListComponent},
      { path: 'channel/:id', component: ChannelChatComponent },
      // Weitere geschützte Routen
    ]
  }
];
