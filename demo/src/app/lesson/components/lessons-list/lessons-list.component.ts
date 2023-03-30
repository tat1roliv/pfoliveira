import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Lesson } from 'src/app/models/lesson';
import { Session } from 'src/app/models/session';
import { LessonService } from '../../services/lesson.service';
import { LessonsEditComponent } from '../lessons-edit/lessons-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { LessonState } from '../../lessons-state.reducer';
import { loadLessonsStates, loadedLessons, removeLessonState } from '../../lessons-state.actions';
import { selectLoadingLessons  , selectLoadedLessons  } from '../../lessons-state.selectors';


@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, OnDestroy {

  @Input() lessonsList: Lesson[] = [];

  lessonsList$!: Observable<Lesson[]>;
  suscripcion!: Subscription;
  session$!: Observable<Session>
  loading$!: Observable<Boolean>;

   constructor(
     public lessonsService: LessonService,
     private router: Router,
     private session: SessionService,
     public dialog: MatDialog,
     private store: Store<LessonState>
     ) {
   }

   ngOnInit() {

    this.loading$ = this.store.select(selectLoadingLessons);

    this.store.dispatch(loadLessonsStates());

    this.lessonsList$ = this.store.select(selectLoadedLessons);

    this.lessonsService.getLessonsObservable();
    this.session$ = this.session.getSession()

   }

   removeLesson(lesson: Lesson): void {

    this.store.dispatch(removeLessonState({ lesson }));

   }

   editLessonRedirect(lesson: Lesson){
     this.router.navigate(['lessons/edit', lesson])
   }

   openModalDialog(lesson: Lesson){
    this.dialog.open(LessonsEditComponent, {
      data: lesson
    }).afterClosed().subscribe((lesson: Lesson) => {
      alert(`lesson ${lesson.title} edited`)
      this.lessonsList$ = this.lessonsService.getLessonsObservable();
    })
  }

   ngOnDestroy() {

   }

}
