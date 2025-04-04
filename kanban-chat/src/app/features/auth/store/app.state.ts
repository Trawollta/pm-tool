
import { CategoryState } from '../../board/store/category-store/caetegory.reducer';
import { SubtaskState } from '../../board/store/subtask-store/subtask.reducer';
import { TaskState } from '../../board/store/task-store/task.reducer';
import { ChannelsState } from '../../channels/store/channels.reducer';
import { MessagesState } from '../../messages/store/messages.reducer';
import { AuthState } from './auth.reducer';

export interface AppState {
  auth: AuthState;
  channels: ChannelsState;
  messages: MessagesState;
  tasks: TaskState;
  categories: CategoryState;
  subtasks: SubtaskState;

}