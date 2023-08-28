import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task'
import {TASKS} from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private spiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return of(TASKS); //returning mock data for now.
  }
}
