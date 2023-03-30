import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule, Routes } from '@angular/router';
import  { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
//import { AuthEffects } from '../auth.effects';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, reducer } from './state/auth.reducer';

@NgModule({
  declarations: [
    AuthHomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, reducer)
  ]
})
export class AuthModule { }
