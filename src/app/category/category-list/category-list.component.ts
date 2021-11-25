import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryList } from 'src/app/models/category-list.model';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = []

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((v:CategoryList) => {
      this.categories = v.categoryList
    })
  }

  editCategory(id: number): void {
    this.router.navigateByUrl(`/category/category-update/${id}`);
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id).subscribe({complete: () => this.router.navigateByUrl("/", {skipLocationChange:true}).then(
      () => this.router.navigateByUrl("/category/category-list"))});
  }

}
