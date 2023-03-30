import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { MaterialModule } from './material.module';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
