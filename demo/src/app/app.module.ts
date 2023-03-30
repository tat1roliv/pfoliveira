import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
//import { StudentNamePipe } from './pipes/student-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
//import { ROOT_REDUCERS } from './core/state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        NavbarComponent,
        FooterComponent,
       // StudentNamePipe,
        TitleSizeDirective,
        NotFoundComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        CoreModule,
        //StoreModule.forRoot(ROOT_REDUCERS),
        StoreModule.forRoot({},{}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
