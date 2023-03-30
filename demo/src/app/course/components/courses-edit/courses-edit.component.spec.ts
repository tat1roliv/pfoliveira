import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEditComponent } from './courses-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


describe('CoursesEditComponent', () => {
  let component: CoursesEditComponent;
  let fixture: ComponentFixture<CoursesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesEditComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,

    ],
    providers: [
        
    ]


    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
