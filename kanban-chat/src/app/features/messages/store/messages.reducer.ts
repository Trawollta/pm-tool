import { createReducer, on } from '@ngrx/store';
import {
  loadMessages, loadMessagesSuccess, loadMessagesFailure,
  createMessage, createMessageSuccess, createMessageFailure
} from './messages.actions';
import { Message } from '../../../shared/models/message.model';

export interface MessagesState {
  messages: Message[];
  loading: boolean;
  error: string | null;
}

export const initialMessagesState: MessagesState = {
  messages: [],
  loading: false,
  error: null
};

export const messagesReducer = createReducer(
  initialMessagesState,

  // Nachrichten laden
  on(loadMessages, state => ({
    ...state,
    loading: true,
    error: null
  })),

  // Nachrichten erfolgreich geladen
  on(loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages,
    loading: false
  })),

  // Fehler beim Laden
  on(loadMessagesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Neue Nachricht erstellen
  on(createMessage, state => ({
    ...state,
    loading: true
  })),

  // Nachricht erfolgreich erstellt → an Liste anhängen
  on(createMessageSuccess, (state, { message }) => {
    console.log('✅ Nachricht im Reducer angekommen:', message);
    return {
      ...state,
      messages: [...state.messages, message],
      loading: false
    };
  }),

  // Fehler beim Erstellen
  on(createMessageFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
