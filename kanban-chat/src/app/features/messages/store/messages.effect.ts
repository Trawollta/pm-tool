import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure, createMessage, createMessageSuccess, createMessageFailure } from './messages.actions';// Dummy-Daten für Nachrichten
import { MessagesService } from '../services/messages.service';
@Injectable()
export class MessagesEffects {
  constructor(private actions$: Actions,
    private messagesService: MessagesService

  ) {}

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMessages),
      mergeMap(({ conversationType, conversationId }) =>
        this.messagesService.getMessages(conversationType, conversationId).pipe(
          map(messages => loadMessagesSuccess({ messages })),
          catchError(error =>
            of(loadMessagesFailure({ error: error.message || 'Fehler beim Laden der Nachrichten' }))
          )
        )
      )
    )
  );

  createMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createMessage),
      mergeMap(({ message }) =>
        this.messagesService.sendMessage(message).pipe(
          map(saved => {
            console.log('✅ Nachricht erfolgreich gespeichert:', saved);
            return createMessageSuccess({ message: saved });
          }),
          catchError(error =>
            of(createMessageFailure({ error: error.message || 'Fehler beim Senden der Nachricht' }))
          )
        )
      )
    )
  );
  
}
