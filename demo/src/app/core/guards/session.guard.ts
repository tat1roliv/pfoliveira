import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSessionState } from 'src/app/auth/state/auth.selectors';
import { Session } from 'src/app/models/session';
//import { SessionService } from '../services/session.service';


@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    //private session: SessionService,
    private authStore: Store<AuthState>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSessionState).pipe(
        map( (session: Session) => {
            if(session.userActive){//session.sessionActive
              return true;
            }else{
              this.router.navigate(['auth/login']);
              return false;
            }
          })
        )
      }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSessionState).pipe(
        map( (session: Session) => {
            if(session.userActive){//session.sessionActive
              return true;
            }else{
              this.router.navigate(['auth/login']);
              return false;
            }
          })
        )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //return true
      return this.authStore.select(selectSessionState).pipe(
        map( (session: Session) => {
            if(session.userActive){//session.sessionActive
              return true;
            }else{
              this.router.navigate(['auth/login']);
              return false;
            }
          })
        )

  }


}
