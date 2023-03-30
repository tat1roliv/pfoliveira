import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudentsState from './students-state.reducer';

export const selectStudentsState = createFeatureSelector<fromStudentsState.StudentState>(
  fromStudentsState.studentsStateFeatureKey
);

export const selectLoadingStudents = createSelector(
  selectStudentsState,
  (state: fromStudentsState.StudentState) => {
      return state.loadingData;
  }
)

export const selectLoadedStudents = createSelector(
  selectStudentsState,
  (state: fromStudentsState.StudentState) => {
      return state.students;
  }
) 
