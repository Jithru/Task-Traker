import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-task';
import { TaskService } from '../../services/task.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    console.log(task);
    this.taskService.deleteTask(task).subscribe(() => this.tasks.filter((t) => t.id !== task.id));
    window.location.reload();

  }

  toggleReminder(task: any) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.updateTask(task).subscribe();
    window.location.reload();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push());
    window.location.reload();
  }

}
