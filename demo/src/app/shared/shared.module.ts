import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class SharedModule { }
