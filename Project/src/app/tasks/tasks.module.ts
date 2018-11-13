import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks-component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TruncatePipe } from '../shared/truncate-text';
import { MaterialModule } from '../core/material/material.module';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    TasksComponent
  ],
  declarations: [TasksComponent, TruncatePipe]
})
export class TasksModule { }
