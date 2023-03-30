import * as fromCoursesState from './courses-state.reducer';
import { selectCoursesStateState } from './courses-state.selectors';

describe('CoursesState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCoursesStateState({
      [fromCoursesState.coursesStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
