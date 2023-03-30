import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';
import { LoginService } from '../../services/login.service';
import { loadAuths } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin!: FormGroup;
  subscription!: Subscription

  constructor(
    public router: Router,
    public loginService: LoginService,
    private authStore: Store<AuthState>
  ){
    let controles: any = {
      userName_: new FormControl('', [ Validators.required , Validators.minLength(2) ]),
      email_: new FormControl('', [ Validators.required , Validators.email  ]),
      password_: new FormControl('', [ Validators.required , Validators.minLength(5) ]),

    }

    this.formLogin = new FormGroup(controles);
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      userName_: new FormControl(),
      email_: new FormControl(),
      password_: new FormControl(),
      isAdmin_: new FormControl(false)
  });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login(){
    let user: User = {
      userName_: this.formLogin.value.userName_,
      email_: this.formLogin.value.email_,
      password_: this.formLogin.value.password_,
      isAdmin_: this.formLogin.value.isAdmin_,
    }
    this.subscription = this.loginService.login(user).subscribe((session: Session) => {
      this.authStore.dispatch(loadAuths({session: session}))
      this.router.navigate(['home'])
    })

  }
  }



