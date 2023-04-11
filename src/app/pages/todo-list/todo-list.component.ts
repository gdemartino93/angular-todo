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

  tasks: ITasks[] = [];
  @Input()
  description : string = "";

  constructor() { }

  createNew(){
    const task: ITasks = {
      id: this.tasks.length + 1,
      description: this.description,
      isDone: false,
      createdAt: new Date()
    };
    this.tasks.push(task);
    this.description = "";
    console.log(this.tasks);
  }

  ngOnInit(): void {

  }
}
