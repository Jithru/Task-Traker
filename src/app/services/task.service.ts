import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { TASKS } from '../mock-task';
import { Task } from '../Task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = ' http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]> {
    // const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiURL);
  }
}
