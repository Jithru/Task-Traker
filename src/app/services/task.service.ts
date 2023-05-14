import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { TASKS } from '../mock-task';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  header: new HttpHeaders({
    'Content-type': 'application/json'
  }

  )

}

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

  deleteTask(task: Task): Observable<Task> {
    const Url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(Url);
  }

  updateTask(task: Task): Observable<Task> {
    const Url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(Url, task);

  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task);
  }
}
