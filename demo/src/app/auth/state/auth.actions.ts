import { createAction, props } from '@ngrx/store';
import { Session } from 'src/app/models/session';

export const loadAuths = createAction(
  '[Auth] Load Auths',
  props<{ session: Session }>()
);

