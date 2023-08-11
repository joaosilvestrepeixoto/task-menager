import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass']
})
export class CreateTaskComponent {
  public taskForm: FormGroup = this.formBuilder.group({
    text: ['', Validators.required],
    day: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  public async createTask(): Promise<void> {
    await this.taskService.postTask(this.taskForm.value)
  }
}
