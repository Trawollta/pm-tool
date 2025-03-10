import { createAction, props } from '@ngrx/store';
import { Message } from '../../../shared/models/message.model';

/** Nachrichten für eine bestimmte Konversation (channel oder direct) laden */
export const loadMessages = createAction(
  '[Messages] Load Messages',
  props<{ conversationType: 'channel' | 'direct'; conversationId: number }>()
);

/** Nachrichten wurden erfolgreich geladen */
export const loadMessagesSuccess = createAction(
  '[Messages] Load Messages Success',
  props<{ messages: Message[] }>()
);

/** Fehler beim Laden der Nachrichten */
export const loadMessagesFailure = createAction(
  '[Messages] Load Messages Failure',
  props<{ error: string }>()
);

/** Neue Nachricht erstellen */
export const createMessage = createAction(
  '[Messages] Create Message',
  props<{ message: Message }>()
);

/** Neue Nachricht erfolgreich erstellt */
export const createMessageSuccess = createAction(
  '[Messages] Create Message Success',
  props<{ message: Message }>()
);

/** Fehler beim Erstellen einer Nachricht */
export const createMessageFailure = createAction(
  '[Messages] Create Message Failure',
  props<{ error: string }>()
);
