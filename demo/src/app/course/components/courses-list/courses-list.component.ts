import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Course } from 'src/app/models/course';
import { Session } from 'src/app/models/session';
import { CourseService } from '../../services/course.service';
import { CoursesEditComponent } from '../courses-edit/courses-edit.component';

import { CourseState } from '../../courses-state.reducer';
import { loadCoursesStates , loadedCourses, removeCourseState} from '../../courses-state.actions';
import { selectLoadingCourses  , selectLoadedCourses  } from '../../courses-state.selectors';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {

  @Input() coursesList: Course[] = [];

  coursesList$!: Observable<Course[]>;
  suscripcion!: Subscription;
  session$!: Observable<Session>
  loading$!: Observable<Boolean>;

   constructor(
     public coursesService: CourseService,
     private router: Router,
     private session: SessionService,
     public dialog: MatDialog,
     private store: Store<CourseState>
     ) {
   }

   ngOnInit() {

    this.loading$ = this.store.select(selectLoadingCourses);

    this.store.dispatch(loadCoursesStates());

    this.coursesList$ = this.store.select(selectLoadedCourses);

    this.coursesService.getCoursesObservable();
    this.session$ = this.session.getSession()

   }

   removeCourse(course: Course): void {

    this.store.dispatch(removeCourseState({ course }));

   }

   editCourseRedirect(course: Course){
     this.router.navigate(['courses/edit', course])
   }

   openModalDialog(course: Course){
    this.dialog.open(CoursesEditComponent, {
      data: course
    }).afterClosed().subscribe((course: Course) => {
      alert(`course ${course.courseName} edited`)
      this.coursesList$ = this.coursesService.getCoursesObservable();
    })
  }

   ngOnDestroy() {

   }


}
