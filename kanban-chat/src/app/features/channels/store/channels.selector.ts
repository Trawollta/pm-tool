import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChannelsState } from './channels.reducer';
import { Channel } from '../models/channels.model';  // Stelle sicher, dass der Pfad stimmt

export const selectChannelsState = createFeatureSelector<ChannelsState>('channels');

export const selectAllChannels = createSelector(
  selectChannelsState,
  (state: ChannelsState) => state.channels
);

export const selectChannelsLoading = createSelector(
  selectChannelsState,
  (state: ChannelsState) => state.loading
);

export const selectChannelsError = createSelector(
  selectChannelsState,
  (state: ChannelsState) => state.error
);

export const selectChannelById = (id: number) =>
  createSelector(
    selectAllChannels,
    (channels: Channel[]) => channels.find(channel => channel.id === id)
  );
