import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo !: Todo;

  @Output() edit = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  editTodo(): void {
    this.edit.emit(this.todo.id)
  }

  deleteTodo(): void {
    this.delete.emit(this.todo.id)
  }

}
