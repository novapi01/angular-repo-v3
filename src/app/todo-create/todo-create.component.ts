import { Component, OnInit } from '@angular/core';
import{TodoService} from '../todo.service';
@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  id:any;
  date:any;
  title:any;
  desc:any;
  item:any;
  constructor( private c:TodoService) { }

  ngOnInit(): void {
    this.item=this.c.TodoList;

  }
  additem(){
    this.c.addingitem(this.id,this.date,this.title,this.desc);
  }

}
