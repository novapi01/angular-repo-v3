import {Injectable} from '@angular/core'
@Injectable({providedIn:'root'})

export class TodoService{
    index:number;
    TodoList=[
        {id:1 ,date :'21/10/20',title:'MA-1502',des:'Please join Mathsmatics class at 9AM'},
        {id:2 ,date :'22/10/20',title:'CS-1567',des:'Please join Scripting Lab  at 11AM'},
        {id:3 ,date :'23/10/20',title:'CS-1508',des:'Please join Computer Network class at 3PM'},
        {id:4 ,date :'25/10/20',title:'CS-1502',des:'Please join Operating System class at 10AM'}
    ]
    addingitem(id,date,title,des){
        this.TodoList.push({id,date,title,des});
      }
      deletingitem(d){
         this.index =this.TodoList.indexOf(d);
        if (this.index > -1) {
          this.TodoList.splice(this.index, 1);
        }

      }
}