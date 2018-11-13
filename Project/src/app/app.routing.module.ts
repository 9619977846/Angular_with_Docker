import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks-component';
import { TasksDetailsComponent } from './tasksDetails/tasks-details-component';

import { PageNotFoundComponent } from './not-found-page-component';

const routes: Routes = [
  { path: 'list-task', component: TasksComponent },
  { path: 'list-task/:uuid', component: TasksDetailsComponent },
  { path: '',   redirectTo: 'list-task', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

