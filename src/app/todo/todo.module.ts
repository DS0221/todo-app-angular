import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatButtonModule } from '@angular/material/button';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoCreateComponent,
    TodoUpdateComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
