import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLessonsState from './lessons-state.reducer';

export const selectLessonsStateState = createFeatureSelector<fromLessonsState.LessonState>(
  fromLessonsState.lessonsStateFeatureKey
);

export const selectLoadingLessons = createSelector(
  selectLessonsStateState,
    (state: fromLessonsState.LessonState) => {
        return state.loadingDataLesson;
    }
)

export const selectLoadedLessons = createSelector(
  selectLessonsStateState,
    (state: fromLessonsState.LessonState) => {
        return state.lessons;
    }
)
