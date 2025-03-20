import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { BoardPageComponent } from './features/board/components/board-page/board-page.component';
import { ChannelChatComponent } from './features/channels/components/channel-chat/channel-chat.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { ChannelListComponent } from './features/channels/components/channel-list/channel-list.component';
import { DirectMessageListComponent } from './features/direct-messages/components/direct-message-list/direct-message-list.component';
import { AccountDetailsComponent } from './features/account/components/account-details/account-details.component';
import { SignUpComponent } from './features/auth/components/sign-up/sign-up.component';
import { CreateTaskDialogComponent } from './features/board/components/create-task-dialog/create-task-dialog.component';

export const routes: Routes = [
  // Auth-Bereich: Login und eventuell weitere Auth-Seiten
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignUpComponent },
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
      { path: 'direct-messages', component: DirectMessageListComponent },
      { path: 'channel-list', component: ChannelListComponent },
      { path: 'channel/:id', component: ChannelChatComponent },
      { path: 'account', component: AccountDetailsComponent },
      { path: 'create', component: CreateTaskDialogComponent}
    ]
  }
];
