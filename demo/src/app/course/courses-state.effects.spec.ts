import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CoursesStateEffects } from './courses-state.effects';

describe('CoursesStateEffects', () => {
  let actions$: Observable<any>;
  let effects: CoursesStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CoursesStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
