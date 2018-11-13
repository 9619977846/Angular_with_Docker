import {Component, ViewChild, OnDestroy} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { TaskService } from '../_services/task.service';
import { ToastrService } from 'ngx-toastr';
import { timer, Observable, Subscription } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export interface PeriodicElement {
  title: string;
  description: string;
  status: string;
  duedate: Date;
  priority: number;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-tasks-component',
  styleUrls: ['tasks-component.scss'],
  templateUrl: 'tasks-component.html',
})
export class TasksComponent implements OnDestroy {
  displayedColumns: string[] = ['title', 'description', 'status', 'duedate', 'priority', 'view', 'postpone', 'resolve'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  subscription: Subscription;
  ELEMENT_DATA: PeriodicElement[];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor( private taskService: TaskService,
               private toastrService: ToastrService,
               breakpointObserver: BreakpointObserver ) {

    this.subscription = timer(0, 10000).pipe(
      switchMap(() => taskService.getTaskList()))
    .subscribe(tasks => this.doSomething(tasks));

  }

  doSomething(tasks) {
    this.ELEMENT_DATA = tasks.map(e => ({ ... e }));
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }

  postPoneTask(task) {
    this.taskService.postPoneTask(task)
    .subscribe(
      data => {
          if (data) {
            this.toastrService.success('Task Postpone successfully');
            this.taskService.getTaskList()
            .subscribe(tasks => this.doSomething(tasks));
          }
      },
      error => {
          this.toastrService.error('Internal error', 'Task Postpone failed');
      }
   );
  }

  resolveTask(task) {
    this.taskService.resolveTask(task)
    .subscribe(
      data => {
          if (data) {
            this.toastrService.success('Task Resolved successfully');
            this.taskService.getTaskList()
            .subscribe(tasks => this.doSomething(tasks));
          }
      },
      error => {
          this.toastrService.error('Internal error', 'Task Resolved failed');
      }
   );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
