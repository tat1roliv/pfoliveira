import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { Router } from "@angular/router";
import { concatMap, map } from "rxjs";
import { Course} from "src/app/models/course";
import { loadCoursesStates, loadedCourses } from "./courses-state.actions";
import { CourseService } from "./services/course.service";
import * as CoursesStateActions from './courses-state.actions';


@Injectable()
export class CoursesStateEffects {


  loadCoursesStates$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CoursesStateActions.loadCoursesStates),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => {
        return this.courses.getCoursesObservable().pipe( // Obs2
            map((c: Course[]) => loadedCourses({ courses: c }))
        )
    })
    );
  });

  addStudentState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CoursesStateActions.addCourseState),
        concatMap(({ course }) => {
            return this.courses.addCourse(course).pipe(
                map((course: Course) => {
                  alert(`course ${course.courseName} added` );
                  this.router.navigate(['courses/list']);
                    return loadCoursesStates();
                })
            )
        })
    );
  });

  removeCourseState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CoursesStateActions.removeCourseState),
        concatMap(({ course }) => {
            return this.courses.removeCourse(course).pipe(
                map((course: Course) => {
                    alert(`course ${course.courseName}  deleted` );
                    return loadCoursesStates();
                })
            )
        })
    )
  });

  editCourseState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CoursesStateActions.editCourseState),
        concatMap(({ course }) => {
            return this.courses.editServCourse(course).pipe(
                map((course: Course) => {
                  return loadCoursesStates();
                })
            )
        })
    );
  });

  constructor(
    private courses: CourseService,
    private actions$: Actions,
    private router: Router,
  ) {}
}
