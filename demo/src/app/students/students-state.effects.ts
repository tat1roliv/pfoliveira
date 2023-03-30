import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import * as StudentsStateActions from './students-state.actions';
import { Router } from "@angular/router";
import { concatMap, map } from "rxjs";
import { Student } from "src/app/models/student";
import { loadStudentsState, loadedStudents } from "./students-state.actions";
import { StudentsService } from "./services/students.service";

@Injectable()
export class StudentsStateEffects {


  loadStudentsState$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentsStateActions.loadStudentsState),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => {
        return this.students.getStudentsObservable().pipe( // Obs2
            map((s: Student[]) => loadedStudents({ students: s }))
        )
    })
    );
  });

  addStudentState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(StudentsStateActions.addStudentState),
        concatMap(({ student }) => {
            return this.students.addStudent(student).pipe(
                map((student: Student) => {
                    alert(`student ${student.name} ${student.lastName} added`);
                    this.router.navigate(['students/list']);
                    return loadStudentsState();
                })
            )
        })
    );
  });

  removeStudentState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(StudentsStateActions.removeStudentState),
        concatMap(({ student }) => {
            return this.students.removeStudent(student).pipe(
                map((student: Student) => {
                    alert(`student ${student.name} ${student.lastName} deleted` );
                    return loadStudentsState();
                })
            )
        })
    )
  });

  editSudentState$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(StudentsStateActions.editStudentState),
        concatMap(({ student }) => {
            return this.students.editServStudent(student).pipe(
                map((student: Student) => {
                  return loadStudentsState();
                })
            )
        })
    );
  });

  constructor(
    private students: StudentsService,
    private actions$: Actions,
    private router: Router,
  ) {}
}
