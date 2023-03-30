import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/course';
import { addCourseState } from '../../courses-state.actions';
import { CourseState } from '../../courses-state.reducer';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent  implements OnInit{

  formCourses!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public coursesService: CourseService,
    public router: Router,
    private store: Store<CourseState>
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {

      this.formCourses = new FormGroup({
        id: new FormControl(''),
        courseName: new FormControl(''),

      })
    })

  }

  coursesAdd(){
    let course: Course = {
      id: '',
      courseName: this.formCourses.value.courseName,

    }

    this.store.dispatch(addCourseState({ course: course }));

  }



}
