import {Component} from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../_services/task.service';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks-details-component',
  styleUrls: ['tasks-details-component.scss'],
  templateUrl: 'tasks-details-component.html',
})
export class TasksDetailsComponent {
  uuid: number;
  taskDetails: any;
  form: FormBuilder;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private taskService: TaskService,
              private toastrService: ToastrService) {


    this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
    });

    taskService.getTaskDetails(this.uuid)
    .subscribe(task => {
      this.taskDetails = task;
    });

  }
  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
}
  editTaskDetails() {
    this.taskService.editTaskDetails(this.taskDetails)
    .subscribe(data => {
      this.toastrService.success('Task updated successfully');
          this.router.navigate(['/list-task']);
          },
            error => {
          this.toastrService.error('Internal error', 'Task updated failed');
       });
    }

}
