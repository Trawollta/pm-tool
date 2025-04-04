import { createReducer, on } from '@ngrx/store';
import * as SubtaskActions from './subtask.actions';
import { Subtask } from '../../models/subtask';

export interface SubtaskState {
  subtasks: Subtask[];
  loading: boolean;
  error: string | null;
}

export const initialState: SubtaskState = {
  subtasks: [],
  loading: false,
  error: null,
};

export const subtaskReducer = createReducer(
  initialState,

  // Load Subtasks
  on(SubtaskActions.loadSubtasks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(SubtaskActions.loadSubtasksSuccess, (state, { subtasks }) => ({
    ...state,
    loading: false,
    subtasks,
  })),
  on(SubtaskActions.loadSubtasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Create Subtask
  on(SubtaskActions.createSubtaskSuccess, (state, { subtask }) => ({
    ...state,
    subtasks: [...state.subtasks, subtask],
  })),
  on(SubtaskActions.createSubtaskFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // Update Subtask
  on(SubtaskActions.updateSubtaskSuccess, (state, { subtask }) => ({
    ...state,
    subtasks: state.subtasks.map(s => s.id === subtask.id ? subtask : s),
  })),
  on(SubtaskActions.updateSubtaskFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // Delete Subtask
  on(SubtaskActions.deleteSubtaskSuccess, (state, { id }) => ({
    ...state,
    subtasks: state.subtasks.filter(s => s.id !== id),
  })),
  on(SubtaskActions.deleteSubtaskFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
