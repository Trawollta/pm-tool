import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ⬅️ HttpClientProvider hinzugefügt
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
import { taskReducer } from './features/board/store/task-store/task.reducer';
import { TaskEffects } from './features/board/store/task-store/task.effects';
import { categoryReducer } from './features/board/store/category-store/caetegory.reducer';
import { CategoryEffects } from './features/board/store/category-store/caetegory.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore({ 
      auth: authReducer,
      channels: channelsReducer,
      messages: messagesReducer,
      tasks: taskReducer,
      categories: categoryReducer 

    }),
    provideEffects([
      AuthEffects,
      ChannelsEffects,
      MessagesEffects,
      TaskEffects,
      CategoryEffects
    ]),
  ]
};
