import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [

  {path: '',  component: HomeComponent}, // Default route
  {path: 'tasks', component: TasksComponent}, // Route for tasks

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
