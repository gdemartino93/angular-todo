import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { CardTaskComponent } from './component/card-task/card-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskListComponent,
    CardTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
