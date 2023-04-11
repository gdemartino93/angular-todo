import { Component, Input, OnInit } from '@angular/core';
import { ITasks } from 'src/app/models/Tasks';
import { FormsModule } from '@angular/forms';
import { randomInt } from 'crypto';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks: ITasks[] = [];
@Input()
description : string = "";

createNew(){
    this.task = {
      id : 1,
      description : this.description,
      isDone : false,
      createdAt : new Date()
    }
    this.tasks.push(this.task)
    this.description = "";
    console.log(this.tasks)
}
task : ITasks = {
  id: 1,
  description : "",
  isDone : false,
  createdAt : new Date()

}
  constructor() { }

  ngOnInit(): void {
  }

}
