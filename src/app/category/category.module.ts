import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryListItemComponent } from './category-list-item/category-list-item.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryListItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class CategoryModule { }
