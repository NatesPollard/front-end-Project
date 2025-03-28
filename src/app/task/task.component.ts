import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task!: Task;


}
