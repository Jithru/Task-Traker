import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text?: string;
  day?: string;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  onSubmit() {

    if (!this.text) {
      alert('Please Add a Task !!!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day || '',
      reminder: this.reminder,
    }
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
