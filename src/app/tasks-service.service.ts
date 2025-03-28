import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {
  getTasks(): Task[]{
 return [
  
    {
      title: 'Task 1',
      description: 'Description 1',
      date: '2023-10-01',
      time: '10:00',
      priority_level: 'High',
      category: 'Work',
      progress_level: 'In Progress'
    },
    {
      title: 'Task 2',
      description: 'Description 2',
      date: '2023-10-02',
      time: '11:00',
      priority_level: 'Medium',
      category: 'Personal',
      progress_level: 'Completed'
    },
    {
      title: 'Task 3',
      description: 'Description 3',
      date: '2023-10-03',
      time: '12:00',
      priority_level: 'Low',
      category: 'Other',
      progress_level: 'Not Started'
    }

 



  ];

 

}}
