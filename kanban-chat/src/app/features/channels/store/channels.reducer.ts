import { createReducer, on } from '@ngrx/store';
import { Channel } from '../models/channels.model';
import { 
  loadChannels, 
  loadChannelsSuccess, 
  loadChannelsFailure, 
  createChannel, 
  createChannelSuccess, 
  createChannelFailure 
} from './channels.actions';

// Definiere den Zustand des Channels-Slices
export interface ChannelsState {
  channels: Channel[];
  loading: boolean;
  error: string | null;
}

// Initialer Zustand: keine Channels, keine Ladeanzeige, kein Fehler
export const initialChannelsState: ChannelsState = {
  channels: [],
  loading: false,
  error: null,
};

// Erstelle den Reducer, der die Aktionen verarbeitet
export const channelsReducer = createReducer(
  initialChannelsState,
  
  // Beim Starten des Ladens von Channels: setze loading auf true und lösche vorherige Fehler
  on(loadChannels, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  // Bei erfolgreichem Laden: speichere die Channels und setze loading auf false
  on(loadChannelsSuccess, (state, { channels }) => ({
    ...state,
    channels,
    loading: false
  })),
  
  // Falls ein Fehler auftritt: setze loading auf false und speichere den Fehler
  on(loadChannelsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Beim Erstellen eines Channels: setze loading auf true
  on(createChannel, state => ({
    ...state,
    loading: true
  })),
  
  // Bei erfolgreichem Erstellen: füge den neuen Channel zur Liste hinzu und setze loading auf false
  on(createChannelSuccess, (state, { channel }) => ({
    ...state,
    channels: [...state.channels, channel],
    loading: false
  })),
  
  // Falls beim Erstellen ein Fehler auftritt: setze loading auf false und speichere den Fehler
  on(createChannelFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
