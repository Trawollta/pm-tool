import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadChannels, loadChannelsSuccess, loadChannelsFailure, createChannel, createChannelSuccess, createChannelFailure } from './channels.actions';
import { DUMMY_CHANNELS } from '../models/channels.dummy';
import { Channel } from '../models/channels.model';
import { ChannelService } from '../services/channel.service';

@Injectable()
export class ChannelsEffects {
  constructor(private actions$: Actions,
    private channelService: ChannelService
  ) {}

  loadChannels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChannels),
      mergeMap(() =>
        this.channelService.getChannels().pipe(
          map((channels: Channel[]) => loadChannelsSuccess({ channels })),
          catchError(error =>
            of(loadChannelsFailure({ error: error.message || 'Error loading channels' }))
          )
        )
      )
    )
  );

  createChannel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createChannel),
      mergeMap(action =>
        this.channelService.createChannel(action.channel).pipe(
          map((createdChannel: Channel) =>
            createChannelSuccess({ channel: createdChannel })
          ),
          catchError(error =>
            of(createChannelFailure({ error: error.message || 'Error creating channel' }))
          )
        )
      )
    )
  );
}
