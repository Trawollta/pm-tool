import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ⬅️ HttpClientProvider hinzugefügt
import { routes } from './app.routes';
// NgRx Store & Effects
import { provideStore } from '@ngrx/store';
import { authReducer } from './features/auth/store/auth.reducer';
import { AuthEffects } from './features/auth/store/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { channelsReducer } from './features/channels/store/channels.reducer';
import { ChannelsEffects } from './features/channels/store/channels.effects';
import { messagesReducer } from './features/messages/store/messages.reducer';
import { MessagesEffects } from './features/messages/store/messages.effect';
import { TaskEffects } from './features/board/store/task.effects';
import { taskReducer } from './features/board/store/task.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideStore({ 
      auth: authReducer,
      channels: channelsReducer,
      messages: messagesReducer,
      tasks: taskReducer
    }),
    provideEffects([
      AuthEffects,
      ChannelsEffects,
      MessagesEffects,
      TaskEffects
    ]),
  ]
};
