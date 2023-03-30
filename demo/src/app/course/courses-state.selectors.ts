import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCoursesState from './courses-state.reducer';

export const selectCoursesStateState = createFeatureSelector<fromCoursesState.CourseState>(
  fromCoursesState.coursesStateFeatureKey
);

export const selectLoadingCourses = createSelector(
  selectCoursesStateState,
    (state: fromCoursesState.CourseState) => {
        return state.loadingDataCourse;
    }
)

export const selectLoadedCourses = createSelector(
  selectCoursesStateState,
    (state: fromCoursesState.CourseState) => {
        return state.courses;
    }
)
