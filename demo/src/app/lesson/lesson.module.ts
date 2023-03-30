import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService } from './services/lesson.service';
import { LessonRoutingModule } from '../lesson/lesson-routing.module';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsAddComponent } from './components/lessons-add/lessons-add.component';
import { LessonsEditComponent } from './components/lessons-edit/lessons-edit.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { LessonsStateEffects } from './lessons-state.effects';
import { StoreModule } from '@ngrx/store';
import { lessonsStateFeatureKey, reducer } from './lessons-state.reducer';


@NgModule({
  declarations: [
    LessonsListComponent,
    LessonsAddComponent,
    LessonsEditComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    EffectsModule.forFeature([LessonsStateEffects]),
    StoreModule.forFeature(lessonsStateFeatureKey, reducer)
  ],
  exports: [
    LessonRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    LessonService
  ]
})
export class LessonModule { }
