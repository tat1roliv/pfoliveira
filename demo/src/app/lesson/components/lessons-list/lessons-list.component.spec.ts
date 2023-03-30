import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListComponent } from './lessons-list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('LessonsListComponent', () => {
  let component: LessonsListComponent;
  let fixture: ComponentFixture<LessonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsListComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
