import {Component, OnInit, } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import { TaskService } from 'src/app/services/task.service';    
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor( private taskService: TaskService) { }

  ngOnInit(): void {
      this.taskService.getTasks().subscribe ( response => {
        this.tasks = response;
      })
  }

}
