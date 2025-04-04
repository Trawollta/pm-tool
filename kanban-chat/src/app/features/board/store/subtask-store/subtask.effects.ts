import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as SubtaskActions from './subtask.actions';
import { SubtaskService } from '../../services/subtask.service';

@Injectable()
export class SubtaskEffects {
  constructor(private actions$: Actions, private subtaskService: SubtaskService) {}

  loadSubtasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubtaskActions.loadSubtasks),
      mergeMap(({ taskId }) =>
        this.subtaskService.getSubtasks(taskId).pipe(
          map(subtasks => SubtaskActions.loadSubtasksSuccess({ taskId, subtasks })),
          catchError(error => of(SubtaskActions.loadSubtasksFailure({ error: error.message })))
        )
      )
    )
  );
  

  createSubtask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubtaskActions.createSubtask),
      mergeMap(({ subtask }) =>
        this.subtaskService.createSubtask(subtask).pipe(
          map(newSubtask => SubtaskActions.createSubtaskSuccess({ subtask: newSubtask })),
          catchError(error => of(SubtaskActions.createSubtaskFailure({ error: error.message })))
        )
      )
    )
  );

  // Optional: Update & Delete kannst du auch gleich vorbereiten
}
