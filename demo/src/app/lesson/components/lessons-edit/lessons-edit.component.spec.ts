import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsEditComponent } from './lessons-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('LessonsEditComponent', () => {
  let component: LessonsEditComponent;
  let fixture: ComponentFixture<LessonsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsEditComponent ],

      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
