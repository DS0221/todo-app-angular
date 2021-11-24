import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCreateComponent } from './todo/todo-create/todo-create.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoUpdateComponent } from './todo/todo-update/todo-update.component';

const routes: Routes = [
  {path: 'todo/todo-list', component: TodoListComponent},
  {path: 'todo/todo-create', component: TodoCreateComponent},
  {path: 'todo/todo-update/:id', component: TodoUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
