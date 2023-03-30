import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTempComponent } from './students-temp.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('StudentsTempComponent', () => {
  let component: StudentsTempComponent;
  let fixture: ComponentFixture<StudentsTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsTempComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
