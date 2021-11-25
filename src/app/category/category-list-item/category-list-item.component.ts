import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.scss']
})
export class CategoryListItemComponent implements OnInit {

  @Input() category !: Category;

  @Output() edit = new EventEmitter<number>()
  @Output() delete = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  editCategory(): void {
    this.edit.emit(this.category.id)
  }

  deleteCategory(): void {
    this.delete.emit(this.category.id)
  }

}
