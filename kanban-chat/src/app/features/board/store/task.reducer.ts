import { createReducer, on } from '@ngrx/store';
import { TaskData } from '../models/task';
import * as TaskActions from './task.actions';

export interface TaskState {
  tasks: TaskData[];
  loading: boolean;
  error: string | null;
}

export const initialTaskState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = createReducer(
  initialTaskState,
  on(TaskActions.loadTasks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false,
  })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TaskActions.createTask, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TaskActions.createTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loading: false,
  })),
  on(TaskActions.createTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
