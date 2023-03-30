import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSessionState } from 'src/app/auth/state/auth.selectors';
import { Session } from 'src/app/models/session';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    //private session: SessionService,
    private authStore: Store<AuthState>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSessionState).pipe(map((session: Session) => {
        if(session.userActive?.isAdmin_){
          return true;
        }else{
          alert('not allowed, you must have an admin profile')
          this.router.navigate(['home'])
          return false;
        }
      }))
  }

}
