import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks-component';
import { TasksDetailsComponent } from './tasksDetails/tasks-details-component';

import { PageNotFoundComponent } from './not-found-page-component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: ':task-page/:uuid', component: TasksDetailsComponent },
  { path: '',   redirectTo: '/tasks', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

