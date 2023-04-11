import { Component, Input, OnInit } from '@angular/core';
import { ITasks } from 'src/app/models/Tasks';
import { TaskService } from 'src/app/services/task.service'; // Import the TaskService
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: ITasks[] = this.taskService.tasks;
  @Input()
  description : string = "";
  k : number = 1;
  constructor(private taskService : TaskService) { }

  createNew(){
    const task: ITasks = {
      id: this.k++,
      description: this.description,
      isDone: false,
      createdAt: new Date()
    };
    this.taskService.addTask(task)
    this.description = "";
    console.log(this.tasks);
  }

  ngOnInit(): void {

  }
}
