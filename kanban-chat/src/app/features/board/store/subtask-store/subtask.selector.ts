
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubtaskState } from './subtask.reducer';

// Feature Selector
export const selectSubtaskState = createFeatureSelector<SubtaskState>('subtasks');

// Alle Subtasks abrufen
export const selectAllSubtasks = createSelector(
  selectSubtaskState,
  (state) => state.subtasks
);

// Optional: Ladezustand
export const selectSubtasksLoading = createSelector(
  selectSubtaskState,
  (state) => state.loading
);

// Optional: Fehler
export const selectSubtasksError = createSelector(
  selectSubtaskState,
  (state) => state.error
);
