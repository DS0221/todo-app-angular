import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoUpdate } from 'src/app/models/todo-update.model';

@Component({
  selector: 'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls: ['./todo-update.component.scss']
})
export class TodoUpdateComponent implements OnInit {

  todoForm: FormGroup;

  todoUpdate: TodoUpdate;

  todoId: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.todoForm = new FormGroup({
      title:    new FormControl('', Validators.required),
      body:     new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      state:    new FormControl('', Validators.required)
    });

    this.todoId = Number(this.route.snapshot.paramMap.get('id'));

    this.todoService.getTodoById(this.todoId).subscribe( todo => {
      this.todoForm.setValue(todo);
    })

    this.todoUpdate = this.todoForm.value;

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoUpdate = this.todoForm.value;
    this.todoUpdate.id = this.todoId
    this.todoService.updateTodo(this.todoUpdate).subscribe({complete: () => this.router.navigateByUrl("/todo/todo-list")});
  }

}
