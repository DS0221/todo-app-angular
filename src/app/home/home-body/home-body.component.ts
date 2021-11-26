import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {

  todoCnt: number = 0;

  categoryCnt: number = 0;

  constructor(
    private todoService: TodoService,
    private categoryService: CategoryService
  ) {

  }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(v => this.todoCnt = v.todoList.length);
    this.categoryService.getCategoryList().subscribe(v => this.categoryCnt = v.categoryList.length);
  }

}
