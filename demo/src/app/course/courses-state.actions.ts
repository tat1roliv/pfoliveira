import { createAction, props } from '@ngrx/store';
import { Course } from '../models/course';

export const loadCoursesStates = createAction(
  '[CoursesState] Load CoursesStates'
);

export const loadedCourses = createAction(
  '[CoursesState] Loaded Courses',
  props<{ courses: Course[] }>()
);

/*update*/
export const addCourseState = createAction(
  '[CoursesState]  add Course',
  props<{ course: Course}>()
);

export const editCourseState = createAction(
  '[CoursesState] Edit Course',
  props<{ course: Course }>()
);

export const removeCourseState = createAction(
  '[CoursesState]  Remove Course',
  props<{ course: Course }>()
);



