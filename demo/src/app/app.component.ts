import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './auth/state/auth.reducer';
import { selectSessionActive, selectSessionState, selectUserActive } from './auth/state/auth.selectors';
import { SessionService } from './core/services/session.service';
import { Session } from './models/session';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  sessionActive$!: Observable<Boolean>;
  userActive$!: Observable<User | undefined>;

  constructor(
    public session: SessionService,
    public router: Router,
    private authStore: Store<AuthState>
     ){ }

  ngOnInit(): void {
      this.sessionActive$ = this.authStore.select(selectSessionActive);
      this.userActive$ = this.authStore.select(selectUserActive);
  }

  redigirInicio(){
    this.router.navigate(['home'] )
  }

  logout(){
    let sessionLogout: Session = {
      sessionActive: false
    }
    this.session.logout(sessionLogout)
    this.router.navigate(['auth/login'])
  }

}
