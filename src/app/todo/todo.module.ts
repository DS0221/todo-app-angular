import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatButtonModule } from '@angular/material/button';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoUpdateComponent } from './todo-update/todo-update.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HomeModule } from '../home/home.module';

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
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    HomeModule
  ]
})
export class TodoModule { }
