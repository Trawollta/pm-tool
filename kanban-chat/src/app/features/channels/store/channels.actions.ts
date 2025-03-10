import { createAction, props } from '@ngrx/store';
import { Channel } from '../models/channels.model';

/** Channel-Laden starten */
export const loadChannels = createAction('[Channels] Load Channels');

/** Channel-Laden erfolgreich */
export const loadChannelsSuccess = createAction(
  '[Channels] Load Channels Success',
  props<{ channels: Channel[] }>()
);

/** Channel-Laden fehlgeschlagen */
export const loadChannelsFailure = createAction(
  '[Channels] Load Channels Failure',
  props<{ error: string }>()
);

/** Channel anlegen starten */
export const createChannel = createAction(
  '[Channels] Create Channel',
  props<{ channel: Channel }>()
);

/** Channel anlegen erfolgreich */
export const createChannelSuccess = createAction(
  '[Channels] Create Channel Success',
  props<{ channel: Channel }>()
);

/** Channel anlegen fehlgeschlagen */
export const createChannelFailure = createAction(
  '[Channels] Create Channel Failure',
  props<{ error: string }>()
);
