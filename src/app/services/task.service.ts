import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../Task'
import {TASKS} from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly url: string = 'http://localhost:3000/';

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS); //returning mock data for now.
  }
}
