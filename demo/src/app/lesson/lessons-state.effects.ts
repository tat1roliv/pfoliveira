import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import * as LessonsStateActions from './lessons-state.actions';
import { Router } from "@angular/router";

import { concatMap, map } from "rxjs";
import { Lesson } from "src/app/models/lesson";
import { loadLessonsStates, loadedLessons } from "./lessons-state.actions";
import { LessonService } from "./services/lesson.service";

@Injectable()
export class LessonsStateEffects {


  loadLessonsStates$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LessonsStateActions.loadLessonsStates),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => {
        return this.lessons.getLessonsObservable().pipe( // Obs2
            map((l: Lesson[]) => loadedLessons({ lessons: l }))
        )
    })
    );
  });

  addStudentState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(LessonsStateActions.addLessonState),
        concatMap(({ lesson }) => {
            return this.lessons.addLesson(lesson).pipe(
                map((lesson: Lesson) => {
                  alert(`lesson ${lesson.title} added` );
                  this.router.navigate(['lessons/list']);
                    return loadLessonsStates();
                })
            )
        })
    );
  });

  removeLessonState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(LessonsStateActions.removeLessonState),
        concatMap(({ lesson }) => {
            return this.lessons.removeLesson(lesson).pipe(
                map((lesson: Lesson) => {
                    alert(`lesson ${lesson.title}  deleted` );
                    return loadLessonsStates();
                })
            )
        })
    )
  });

  editLessonState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(LessonsStateActions.editLessonState),
        concatMap(({ lesson }) => {
            return this.lessons.editServLesson(lesson).pipe(
                map((lesson: Lesson) => {
                  return loadLessonsStates();
                })
            )
        })
    );
  });

  constructor(
    private lessons: LessonService,
    private actions$: Actions,
    private router: Router,
  ) {}
}
