import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectSessionState = createSelector(
  selectAuthState,
  (state) => state.session
);

export const selectSessionActive = createSelector(
  selectAuthState,
  (state) => state.session.sessionActive
);

export const selectUserActive = createSelector(
  selectAuthState,
  (state) => state.session.userActive
);


