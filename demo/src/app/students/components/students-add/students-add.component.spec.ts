import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAddComponent } from './students-add.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Student } from '../../../models/student';


describe('StudentsAddComponent', () => {
  let component: StudentsAddComponent;
  let fixture: ComponentFixture<StudentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAddComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component test ---  create component', () => {
    expect(component).toBeTruthy();
  });

  it('input form test --- not required' , () => {
    const formStudents = component.formStudents;
    const name = formStudents.controls['name'];

    name.setValue('');

    expect(formStudents.valid).toBeFalse();

  })

  it('input form test --- required' , () => {
    const formStudents = component.formStudents;
    const course = formStudents.controls['course'];

    course.setValue('angular');

    expect(formStudents.valid).toBeTrue();

  })

/*
  it('info test ---', () => {
    const formStudents = component.formStudents

    const id = formStudents.controls['id']
    const name = formStudents.controls['name'];
    const lastName = formStudents.controls['lastName'];
    const email = formStudents.controls['email'];
    const course = formStudents.controls['course'];

    id.setValue('99999');
    name.setValue('ada');
    lastName.setValue('test');
    email.setValue('ada@test.com');
    course.setValue('angular test');

    const btn = fixture.debugElement.query(By.css('#btn-test'))
    btn.nativeElement.click();

    fixture.detectChanges();
  })
*/
});


