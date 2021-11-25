import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryListItemComponent } from './category-list-item/category-list-item.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryListItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
