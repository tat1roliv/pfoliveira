import { createFeature, createReducer, on } from '@ngrx/store';
import { Session } from 'src/app/models/session';
import * as AuthActions from './auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  session: Session
}

export const initialState: AuthState = {
  session: {
    sessionActive: false
  }
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loadAuths, (state, { session }) => {
    return {
      ...state, session:
      {
        sessionActive: true,
        userActive: session.userActive
      }
    }
  }),

);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});

