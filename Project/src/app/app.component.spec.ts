import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {TasksComponent} from './tasks/tasks-component';
import {TruncatePipe} from './shared/truncate-text';
import { AppRoutingModule } from './app.routing.module';
import {TasksDetailsComponent} from './tasksDetails/tasks-details-component';
import { PageNotFoundComponent } from './not-found-page-component';
import { MaterialModule } from './core/material/material.module';
import { TaskService } from './_services/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        PageNotFoundComponent,
        TasksDetailsComponent,
        TasksComponent,
        TruncatePipe
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        CdkTableModule,
        CdkTreeModule,
        HttpModule,
        AppRoutingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [TaskService, TruncatePipe, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
