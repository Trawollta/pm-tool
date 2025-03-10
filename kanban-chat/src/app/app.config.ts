import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
// Beispiel: Importiere NgRx Provider
import { provideStore } from '@ngrx/store';
import { authReducer } from './features/auth/store/auth.reducer';
import { AuthEffects } from './features/auth/store/auth.effects';
import { provideEffects } from '@ngrx/effects';
import { channelsReducer } from './features/channels/store/channels.reducer';
import { ChannelsEffects } from './features/channels/store/channels.effects';
import { messagesReducer } from './features/messages/store/messages.reducer';
import { MessagesEffects } from './features/messages/store/messages.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore({ 
      auth: authReducer,
      channels: channelsReducer,
      messages: messagesReducer 
    }),
    provideEffects([
      AuthEffects,
      ChannelsEffects,
      MessagesEffects]),
  ]
};