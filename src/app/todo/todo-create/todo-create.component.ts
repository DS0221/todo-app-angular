import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoCreate } from '../../models/todo-create.model';
import { TodoService } from 'src/app/services/todo.service';
import { Category } from 'src/app/models/category.model';
import { CategoryList } from 'src/app/models/category-list.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  todoForm: FormGroup;

  todoCreate: TodoCreate;

  categories: Category[] = []

  constructor(
    private todoService: TodoService,
    private categoryService: CategoryService,
    private router: Router) {

      this.todoForm = new FormGroup({
        title:    new FormControl('', Validators.required),
        body:     new FormControl('', Validators.required),
        category: new FormControl("1", Validators.required)
    });

    this.todoCreate = this.todoForm.value;

  }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((v:CategoryList) => {
      this.categories = v.categoryList
    })
  }

  onSubmit(): void {
    this.todoCreate = this.todoForm.value;
    console.log(this.todoCreate)
    this.todoService.createTodo(this.todoCreate).subscribe({complete: () => this.router.navigateByUrl("/todo/todo-list")});

  }

}
