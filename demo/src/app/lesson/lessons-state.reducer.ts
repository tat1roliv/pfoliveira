import { createFeature, createReducer, on } from '@ngrx/store';
import { Lesson } from '../models/lesson';
import * as LessonsStateActions from './lessons-state.actions';

export const lessonsStateFeatureKey = 'lessonsState';

export interface LessonState{
  loadingDataLesson: boolean;
  lessons: Lesson[];
}

export const initialState: LessonState = {
  loadingDataLesson: false,
  lessons: []
}

export const reducer = createReducer(
  initialState,
  on(LessonsStateActions.loadLessonsStates, (state) => {
    const newState: LessonState = {
        loadingDataLesson: true,
        lessons: state.lessons
    }

    return newState
  }),

  on(LessonsStateActions.loadedLessons, (state, { lessons }) => {
      const newState: LessonState = {
          loadingDataLesson: false,
          lessons: lessons
      }

      return newState
  }),

  on(LessonsStateActions.addLessonState, (state, { lesson: Lesson }) => {
    return state;
  }),

  on(LessonsStateActions.removeLessonState, (state, { lesson: Lesson  }) => {
    return state;
  }),


  on(LessonsStateActions.editLessonState, (state, { lesson: Lesson }) => {
    return state;
  }),

);

export const lessonsStateFeature = createFeature({
  name: lessonsStateFeatureKey,
  reducer,
});

