import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { TodoList } from 'src/app/models/todo-list.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe((v:TodoList) => {
      this.todos = v.todoList
    })
  }

  editTodo(id: number): void {
    this.router.navigateByUrl(`/todo/todo-update/${id}`);
    //this.todoService.getTodoById(id).subscribe( v => console.log(v.title))
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe({complete: () => this.router.navigateByUrl("/", {skipLocationChange:true}).then(
      () => this.router.navigateByUrl("/todo/todo-list"))});
  }

}
