import { createAction, props } from '@ngrx/store';
import { TaskData } from '../../models/task';

export const loadTasks = createAction('[Task] Load Tasks');

export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: TaskData[] }>()
);

export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: string }>()
);

export const createTask = createAction(
  '[Task] Create Task',
  props<{ task: TaskData }>()
);

export const createTaskSuccess = createAction(
  '[Task] Create Task Success',
  props<{ task: TaskData }>()
);

export const createTaskFailure = createAction(
  '[Task] Create Task Failure',
  props<{ error: string }>()
);

export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: TaskData }>()
);