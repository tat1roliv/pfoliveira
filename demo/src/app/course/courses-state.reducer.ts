import { createFeature, createReducer, on } from '@ngrx/store';
import { Course } from '../models/course';
import * as CoursesStateActions from './courses-state.actions';

export const coursesStateFeatureKey = 'coursesState';

export interface CourseState{
  loadingDataCourse: boolean;
  courses: Course[];
}

export const initialState: CourseState = {
  loadingDataCourse: false,
  courses: []
}

export const reducer = createReducer(
  initialState,
  on(CoursesStateActions.loadCoursesStates, (state) => {
    const newState: CourseState = {
        loadingDataCourse: true,
        courses: state.courses
    }

    return newState
}),

on(CoursesStateActions.loadedCourses, (state, { courses }) => {
      const newState: CourseState = {
          loadingDataCourse: false,
          courses: courses
      }

      return newState
  }),

  on(CoursesStateActions.addCourseState, (state, { course: Course }) => {
    return state;
  }),

  on(CoursesStateActions.removeCourseState, (state, { course: Course }) => {
    return state;
  }),

  on(CoursesStateActions.editCourseState, (state, { course: Course}) => {
    return state;
  }),


);

export const coursesStateFeature = createFeature({
  name: coursesStateFeatureKey,
  reducer,
});

