import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/app/models/Tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  tasks : ITasks[] = this.taskService.tasks;

  delete(id : number){
    let index = this.tasks.findIndex(task => task.id === id)
    this.tasks.splice(index,1)
  }
  ngOnInit(): void {

  }

}
