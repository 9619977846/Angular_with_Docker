import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { TasksComponent } from './tasks-component';
import { HttpClientTestingModule,
  HttpTestingController} from '@angular/common/http/testing';
import { Component, OnChanges, OnInit, Input, NgModule, NgModuleFactory, Compiler, SimpleChanges, NO_ERRORS_SCHEMA } from '@angular/core';
import { TaskService } from '../_services/task.service';
import { ToastrService } from 'ngx-toastr';
import { TruncatePipe } from '../shared/truncate-text';
import { MaterialModule } from '../core/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent, TruncatePipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ TaskService, TruncatePipe],
      imports: [ MaterialModule, ToastrModule.forRoot(), HttpClientTestingModule,  BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
