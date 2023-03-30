import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LessonsStateEffects } from './lessons-state.effects';

describe('LessonsStateEffects', () => {
  let actions$: Observable<any>;
  let effects: LessonsStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LessonsStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LessonsStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
