
import { HttpClientModule } from '@angular/common/http';


import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,
          HttpTestingController} from '@angular/common/http/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let tasks = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });
  });

  beforeEach(() => {
    tasks = [{createdat: 1541797770345,
      description: 'tshirt and the sweather',
      duedate: 1542316170345,
      postponedat: 1542143370345,
      postponedtime: null,
      priority: '1',
      resolvedat: null,
      status: 'NEW',
      title: 'list-task',
      updatedat: 1541956288811,
      uuid: '2b49ea78-f502-4b07-a1d7-9b1a37e4489b'}];
  });

  it('should be initialized', inject([TaskService], (taskService: TaskService) => {
    expect(taskService).toBeTruthy();
  }));

  it(
    'should get Task List Array',
    inject(
      [TaskService, HttpTestingController],
      (taskService: TaskService, backend: HttpTestingController) => {
        taskService.getTaskList().subscribe(
          (data: any) => {
            expect(data[0].title).toEqual('list-task');
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: '/task/list'
          })
          .flush(
             tasks
          );
      }
    )
  );

  it(
    'should Postpone Task',
    inject(
      [TaskService, HttpTestingController],
      (taskService: TaskService, backend: HttpTestingController) => {
        taskService.postPoneTask(tasks[0]).subscribe(
          (data: any) => {
            expect(data.response).toBe(true);
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: `/task/${tasks[0].uuid}/postpone`
          })
          .flush({
            response: true
          }
          );
      }
    )
  );

  it(
    'should Resolve Task',
    inject(
      [TaskService, HttpTestingController],
      (taskService: TaskService, backend: HttpTestingController) => {
        taskService.resolveTask(tasks[0]).subscribe(
          (data: any) => {
            expect(data.response).toBe(true);
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: `/task/${tasks[0].uuid}/resolve`
          })
          .flush({
            response: true
          }
          );
      }
    )
  );

  it(
    'should get Task details',
    inject(
      [TaskService, HttpTestingController],
      (taskService: TaskService, backend: HttpTestingController) => {
        taskService.getTaskDetails(tasks[0].uuid).subscribe(
          (data: any) => {
            expect(data).toEqual(tasks[0]);
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: `/task/${tasks[0].uuid}`
          })
          .flush(tasks[0]
          );
      }
    )
  );

  it(
    'should edit Task details',
    inject(
      [TaskService, HttpTestingController],
      (taskService: TaskService, backend: HttpTestingController) => {
        taskService.editTaskDetails(tasks[0]).subscribe(
          (data: any) => {
            expect(data.response).toEqual(true);
          },
          (error: any) => {}
        );

        backend
          .expectOne({
            url: `/task/${tasks[0].uuid}`
          })
          .flush({
            response: true
          }
          );
      }
    )
  );

});
