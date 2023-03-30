import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CourseState } from '../../courses-state.reducer';
import { editCourseState } from '../../courses-state.actions';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit{

  formCourses!: FormGroup;
  coursesList$!: Observable<Course[]>;

  constructor(
    private coursesService: CourseService,
    private router: Router,
    private dialogRef: MatDialogRef<CoursesEditComponent>,
    private store: Store<CourseState>,
    @Inject(MAT_DIALOG_DATA) public course: Course
  ){}

  ngOnInit(): void {

    this.coursesList$ = this.coursesService.getCoursesObservable();
    this.formCourses= new FormGroup({
      id: new FormControl(this.course.id),
      courseName: new FormControl(this.course.courseName),
    })

  }

  coursesEdit(){
    let course: Course = {
      id: this.formCourses.value.id,
      courseName: this.formCourses.value.courseName,
    }

    this.store.dispatch(editCourseState({course: course}));
    this.dialogRef.close(course);

  }
}
