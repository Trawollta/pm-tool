import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure, createMessage, createMessageSuccess, createMessageFailure } from './messages.actions';// Dummy-Daten für Nachrichten
import { DUMMY_MESSAGES } from '../../../shared/models/dummy-message.model';

@Injectable()
export class MessagesEffects {
  constructor(private actions$: Actions) {}

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMessages),
      mergeMap(({ conversationType, conversationId }) =>
        // Filtere die Dummy-Nachrichten nach conversationType und conversationId
        of(
          DUMMY_MESSAGES.filter(
            (msg) =>
              msg.conversationType === conversationType &&
              msg.conversationId === conversationId
          )
        ).pipe(
          delay(1000), // Simuliere eine API-Verzögerung
          map((messages) => loadMessagesSuccess({ messages })),
          catchError((error) =>
            of(loadMessagesFailure({ error: error.message || 'Error loading messages' }))
          )
        )
      )
    )
  );

  createMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createMessage),
      mergeMap(({ message }) =>
        // Hier könntest du einen API-Aufruf simulieren. Wir dispatchen sofort den Success.
        of(message).pipe(
          // Optional: delay(500),
          map(msg => createMessageSuccess({ message: msg })),
          catchError(error =>
            of(createMessageFailure({ error: error.message || 'Error creating message' }))
          )
        )
      )
    )
  );
}
