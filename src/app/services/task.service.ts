import { Injectable } from '@angular/core';
import {Task} from '../Task'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private apiUrl = 'http://localhost:3000/tasks';

  constructor() {}

  async getTasks(): Promise<Task[]> {
    return await fetch(this.apiUrl, {method: 'GET'}).then( async response => {
      return await response.json()
    })
  }

  async deleteTask(taskId: number): Promise<void> {
    await fetch(`${this.apiUrl}/${taskId}`, {method: 'DELETE'})
  } 
  
  async postTask(task: Task): Promise<void> {
    console.log(task)
    await fetch(this.apiUrl, {
      method: 'POST',
      body: JSON.stringify(task)
    })
  } 
  
}
