import { TestBed } from '@angular/core/testing';

import { LessonService } from './lesson.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('LessonService', () => {
  let service: LessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      HttpClientTestingModule,
      ReactiveFormsModule,
      MaterialModule,
      BrowserAnimationsModule,
      HttpClientModule,
    ]})
    service = TestBed.inject(LessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
