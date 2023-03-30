import { createFeature, createReducer, on } from '@ngrx/store';
import * as StudentsStateActions from './students-state.actions';
import { Student } from '../models/student';

export const studentsStateFeatureKey = 'studentsState';

export interface StudentState {
  loadingData: boolean,
  students: Student[]
}

export const initialState: StudentState = {
  loadingData: false,
  students: []
}

export const reducer = createReducer(
  initialState,
  on(StudentsStateActions.loadStudentsState, state => state),


  on(StudentsStateActions.loadStudentsState, (state) => {
    const newState: StudentState = {
      loadingData: true,
      students: state.students
  }

    return newState
  }),

  on(StudentsStateActions.loadedStudents, (state, { students }) => {
    const newState: StudentState = {
        loadingData: false,
        students: students
    }

    return newState
  }),

   on(StudentsStateActions.addStudentState, (state, { student: Student }) => {
    return state;
  }),

  on(StudentsStateActions.removeStudentState, (state, { student: Student }) => {
    return state;
  }),


  on(StudentsStateActions.editStudentState, (state, { student: Student }) => {
    return state;
  }),

);

export const studentsStateFeature = createFeature({
  name: studentsStateFeatureKey,
  reducer,
});

