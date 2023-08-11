import { Component, OnInit, Input} from '@angular/core';
import {Task} from '../../Task'
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {} as Task;

  constructor(
    private taskService: TaskService
    ) {
    
   }

  ngOnInit(): void {
  }

  deleteTask() {
  console.log(this.task)  
  this.taskService.deleteTask( this.task.id! )
  }
}
