import { Injectable } from '@angular/core';
import { ITasks } from 'src/app/models/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: ITasks[] = []; // Define an array to store tasks

  constructor() { }

  getAllTasks(): ITasks[] {
    return this.tasks; // Return all tasks from the array
  }

  addTask(task: ITasks): void {
    this.tasks.push(task); // Add a new task to the array
  }
}
