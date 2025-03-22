import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { TaskData } from '../../models/task';

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

  // LOAD TASKS
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

  // CREATE TASK
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
  })),

  // OPTIONAL: DELETE TASK (falls vorhanden)
  // on(TaskActions.deleteTaskSuccess, (state, { id }) => ({
  //   ...state,
  //   tasks: state.tasks.filter(task => task.id !== id)
  // }))
);
