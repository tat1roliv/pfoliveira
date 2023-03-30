import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentsStateEffects } from './students-state.effects';

describe('StudentsStateEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentsStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentsStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StudentsStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
