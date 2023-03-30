import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';
import { Student } from 'src/app/models/student';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ]});

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    //service = TestBed.inject(StudentsService);
    service = new StudentsService(httpClientSpy as any);
  });

  it('service test --- create service', () => {
    expect(service).toBeTruthy();
  });

  it('test ---  mock data service', (done: DoneFn) => {
    const mockdata = [
      {
       "name": "Abbie",
       "lastName": "Brekkeddddd",
       "email": "Stephan64@yahoo.com",
       "course": "course 6",
       "id": "6"
      },
      {
       "name": "Yvonne",
       "lastName": "Baumbach",
       "email": "Pearl_Doyle11@yahoo.com",
       "course": "course 7",
       "id": "7"
      },
     ]

     httpClientSpy.get.and.returnValue(of(mockdata));

     service.getStudentsObservable().subscribe((students: Student[]) => {
      expect(students).toEqual(mockdata);
      done();

     })
  })

});
