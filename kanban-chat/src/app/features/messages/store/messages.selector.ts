import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessagesState } from './messages.reducer';

export const selectMessagesState = createFeatureSelector<MessagesState>('messages');

export const selectAllMessages = createSelector(
  selectMessagesState,
  (state: MessagesState) => state.messages
);

export const selectMessagesLoading = createSelector(
  selectMessagesState,
  (state: MessagesState) => state.loading
);

export const selectMessagesError = createSelector(
  selectMessagesState,
  (state: MessagesState) => state.error
);

export const selectMessagesForConversation = (
  conversationType: 'channel' | 'direct',
  conversationId: number
) => createSelector(
  selectAllMessages,
  (messages) => messages.filter(
    msg => msg.conversation_type === conversationType && msg.conversation_id === conversationId
  )
);
