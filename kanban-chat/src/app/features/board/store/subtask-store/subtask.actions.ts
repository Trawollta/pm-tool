// subtask.actions.ts
import { createAction, props } from '@ngrx/store';
import { Subtask } from '../../models/subtask';

// LOAD Subtasks für ein Task
export const loadSubtasks = createAction(
  '[Subtask] Load Subtasks',
  props<{ taskId: number }>()
);

export const loadSubtasksSuccess = createAction(
  '[Subtask] Load Subtasks Success',
  props<{ taskId: number; subtasks: Subtask[] }>()
);

export const loadSubtasksFailure = createAction(
  '[Subtask] Load Subtasks Failure',
  props<{ error: string }>()
);

// CREATE Subtask
export const createSubtask = createAction(
  '[Subtask] Create Subtask',
  props<{ subtask: Subtask }>()
);

export const createSubtaskSuccess = createAction(
  '[Subtask] Create Subtask Success',
  props<{ subtask: Subtask }>()
);

export const createSubtaskFailure = createAction(
  '[Subtask] Create Subtask Failure',
  props<{ error: string }>()
);

// UPDATE Subtask
export const updateSubtask = createAction(
  '[Subtask] Update Subtask',
  props<{ subtask: Subtask }>()
);

export const updateSubtaskSuccess = createAction(
  '[Subtask] Update Subtask Success',
  props<{ subtask: Subtask }>()
);

export const updateSubtaskFailure = createAction(
  '[Subtask] Update Subtask Failure',
  props<{ error: string }>()
);

// DELETE Subtask
export const deleteSubtask = createAction(
  '[Subtask] Delete Subtask',
  props<{ id: number }>()
);

export const deleteSubtaskSuccess = createAction(
  '[Subtask] Delete Subtask Success',
  props<{ id: number }>()
);

export const deleteSubtaskFailure = createAction(
  '[Subtask] Delete Subtask Failure',
  props<{ error: string }>()
);
