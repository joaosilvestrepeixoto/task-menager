import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task'
import {TASKS} from "../mock-tasks";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly url: string = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url)
  }
}
