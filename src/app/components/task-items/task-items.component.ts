import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {
  @Input() task?: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {

  }

  onDelete(task: any) {
    this.onDeleteTask.emit(task);

  }
}
