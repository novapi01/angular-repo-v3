import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist
  constructor(private list:TodoService) { }

  ngOnInit(): void {
    this.todolist=this.list.TodoList;
  }
  deletelist(a){
    this.list.deletingitem(a);
  }

}
