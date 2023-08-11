import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(taskId: number): void {
    this.http.delete<Task>(`${this.apiUrl}/${taskId}`);
  }
}
