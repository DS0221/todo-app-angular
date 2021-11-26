import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryColorList } from 'src/app/models/category-color-list.model';
import { CategoryColor } from 'src/app/models/category-color.model';
import { CategoryUpdate } from 'src/app/models/category-update.model';
import { TodoUpdate } from 'src/app/models/todo-update.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  categoryForm: FormGroup;

  categoryUpdate: CategoryUpdate;

  categoryId: number;

  colors: CategoryColor[] = []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.categoryForm = new FormGroup({
      name:    new FormControl('', Validators.required),
      slug:    new FormControl('', Validators.required),
      color:   new FormControl('', Validators.required)
    });

    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.categoryUpdate = this.categoryForm.value;
  }

  ngOnInit(): void {
    this.categoryService.getCategoryById(this.categoryId).subscribe( category => {
      this.categoryForm.setValue(category);
    })

    this.categoryService.getCategoryColorList().subscribe((v: CategoryColorList) => {
      this.colors = v.categoryColorList
    })
  }

  onSubmit(): void {
    this.categoryUpdate = this.categoryForm.value;
    this.categoryUpdate.id = this.categoryId
    this.categoryService.updateCategory(this.categoryUpdate).subscribe({complete: () => this.router.navigateByUrl("/category/category-list")});
  }

}
