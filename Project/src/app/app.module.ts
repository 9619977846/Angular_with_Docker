import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './core/material/material.module';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {TasksDetailsComponent} from './tasksDetails/tasks-details-component';
import { PageNotFoundComponent } from './not-found-page-component';
import { TaskService } from './_services/task.service';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkTableModule,
    CdkTreeModule,
    MaterialModule,
    ToastrModule.forRoot(),
    HttpModule,
    TasksModule,
    AppRoutingModule
  ],
  entryComponents: [AppComponent],
  declarations: [ HeaderComponent, PageNotFoundComponent, AppComponent, TasksDetailsComponent],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
