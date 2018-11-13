import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<any> {
    return this.http.get('/task/list');
  }

  postPoneTask(task): Observable<Object> {
    return this.http.post(`/task/${task.uuid}/postpone`, 1, httpOptions);
  }

  resolveTask(task): Observable<Object> {
    return this.http.post(`/task/${task.uuid}/resolve`, {}, httpOptions);
  }

  getTaskDetails(uuid): Observable<Object> {
    return this.http.get(`/task/${uuid}`);
  }

  editTaskDetails(task): Observable<Object> {
    return this.http.post(`/task/${task.uuid}`, task, httpOptions);
  }
}
