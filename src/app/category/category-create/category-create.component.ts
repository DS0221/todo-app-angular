import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryColorList } from 'src/app/models/category-color-list.model';
import { CategoryColor } from 'src/app/models/category-color.model';
import { CategoryCreate } from 'src/app/models/category-create.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  categoryForm: FormGroup;

  colors: CategoryColor[] = []

  categoryCreate: CategoryCreate;

  constructor(
    private categoryService: CategoryService,
    private router: Router) {
      this.categoryForm = new FormGroup({
        name:    new FormControl('', Validators.required),
        slug:    new FormControl('', Validators.required),
        color:   new FormControl("1", Validators.required)
      })

      this.categoryCreate = this.categoryForm.value;
    }

  ngOnInit(): void {
    this.categoryService.getCategoryColorList().subscribe((v: CategoryColorList) => {
      this.colors = v.categoryColorList
    })

  }

  onSubmit(): void {
    this.categoryCreate = this.categoryForm.value;
    this.categoryService.createCategory(this.categoryCreate).subscribe({complete: () => this.router.navigateByUrl("/category/category-list")});
  }

}
