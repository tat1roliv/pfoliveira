import * as fromLessonsState from './lessons-state.reducer';
import { selectLessonsStateState } from './lessons-state.selectors';

describe('LessonsState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLessonsStateState({
      [fromLessonsState.lessonsStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
