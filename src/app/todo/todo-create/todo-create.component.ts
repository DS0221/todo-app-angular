import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoCreate } from '../../models/todo-create.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  todoForm: FormGroup;

  todoCreate: TodoCreate;

  constructor(
    private todoService: TodoService,
    private router: Router){
    this.todoForm = new FormGroup({
      title:    new FormControl('', Validators.required),
      body:     new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });

    this.todoCreate = this.todoForm.value;

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoCreate = this.todoForm.value;
    this.todoService.createTodo(this.todoCreate).subscribe({complete: () => this.router.navigateByUrl("/todo/todo-list")});

  }


}
