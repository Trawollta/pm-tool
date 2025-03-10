import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadChannels, loadChannelsSuccess, loadChannelsFailure } from './channels.actions';
import { DUMMY_CHANNELS } from '../models/channels.dummy';

@Injectable()
export class ChannelsEffects {
  constructor(private actions$: Actions) {}

  loadChannels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChannels),
      mergeMap(() =>
        of(DUMMY_CHANNELS).pipe(
          delay(1000),
          map(channels => loadChannelsSuccess({ channels })),
          catchError(error =>
            of(loadChannelsFailure({ error: error.message || 'Error loading channels' }))
          )
        )
      )
    )
  );
}
