import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; // Initialize tasks as an empty array

  constructor(private tasksService: TasksServiceService) { }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks(); // Fetch tasks from the service
    console.log(this.tasks); // Log the tasks to check if they are being fetched correctly
  }


}