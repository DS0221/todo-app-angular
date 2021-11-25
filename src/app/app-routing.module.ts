import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { HomeComponent } from './home/home/home.component';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './todo/todo-update/todo-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo/todo-list', component: TodoListComponent},
  {path: 'todo/todo-create', component: TodoCreateComponent},
  {path: 'todo/todo-update/:id', component: TodoUpdateComponent},
  {path: 'category/category-list', component: CategoryListComponent},
  {path: 'category/category-create', component: CategoryCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
