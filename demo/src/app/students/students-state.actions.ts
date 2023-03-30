import { createAction, props } from '@ngrx/store';
import { Student } from '../models/student';

export const loadStudentsState = createAction(
  '[StudentsState] Load StudentsState'
);

export const loadedStudents = createAction(
  '[StudentsState] Loaded Students',
  props<{ students: Student[] }>()
);

export const addStudentState = createAction(
  '[StudentsState] Add Student',
  props<{ student: Student }>()
);

export const editStudentState = createAction(
  '[StudentsState] Edit Student',
  props<{ student: Student }>()
);

export const removeStudentState = createAction(
  '[StudentsState] Remove Student',
  props<{ student: Student }>()
);



