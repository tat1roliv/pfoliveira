import { createAction, props } from '@ngrx/store';
import { Lesson } from '../models/lesson';

export const loadLessonsStates = createAction(
  '[LessonsState] Load LessonsStates'
);

export const loadedLessons = createAction(
  '[LessonsState] Loaded Lessons',
  props<{ lessons: Lesson[] }>()
);

export const addLessonState = createAction(
  '[LessonsState] add Lesson',
  props<{ lesson: Lesson }>()
);

export const editLessonState = createAction(
  '[LessonsState]  Edit Lesson',
  props<{ lesson: Lesson }>()
);

export const removeLessonState = createAction(
  '[LessonsState]  Remove Lesson',
  props<{ lesson: Lesson }>()
);




