import {Component, OnInit,} from '@angular/core'; 
import { TaskService } from 'src/app/services/task.service';    
import { Task } from '../../Task'
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
      this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }

}
