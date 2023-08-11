import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './component/tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  {
  path: "", component: TasksComponent
},
  {
  path: "create", component: CreateTaskComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
