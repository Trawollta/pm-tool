import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TaskActions from './task.actions';
import { TaskService } from '../services/task.service';
import { TaskData } from '../models/task';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks: TaskData[]) =>
            TaskActions.loadTasksSuccess({ tasks })
          ),
          catchError(error =>
            of(TaskActions.loadTasksFailure({ error: error.message || 'Error loading tasks' }))
          )
        )
      )
    )
  );

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.createTask),
      mergeMap((action) =>
        this.taskService.createTask(action.task).pipe(
          map((task: TaskData) =>
            TaskActions.createTaskSuccess({ task })
          ),
          catchError(error =>
            of(TaskActions.createTaskFailure({ error: error.message || 'Error creating task' }))
          )
        )
      )
    )
  );
}
