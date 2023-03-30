import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../../models/lesson';
import { LessonState } from '../../lessons-state.reducer';
import { Store } from '@ngrx/store';
import { addLessonState } from '../../lessons-state.actions';

@Component({
  selector: 'app-lessons-add',
  templateUrl: './lessons-add.component.html',
  styleUrls: ['./lessons-add.component.css']
})
export class LessonsAddComponent implements OnInit{

  formLessons!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public lessonsService: LessonService,
    public router: Router,
    private store: Store<LessonState>
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {

      this.formLessons = new FormGroup({
        id: new FormControl(''),
        title: new FormControl(''),
        lessonNumber: new FormControl(''),
        course: new FormControl(''),

      })
    })

  }

  lessonsAdd(){
    let lesson: Lesson = {
      id: '',
      title: this.formLessons.value.title,
      lessonNumber: this.formLessons.value.lessonNumber,
      course: this.formLessons.value.course
    }

    this.store.dispatch(addLessonState({ lesson: lesson }));

  }

}
