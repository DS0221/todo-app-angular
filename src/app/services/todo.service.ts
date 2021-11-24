import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { TodoCreate } from '../models/todo-create.model';
import { TodoDelete } from '../models/todo-delete.model';
import { TodoList } from '../models/todo-list.model';
import { HttpHeaders } from '@angular/common/http';
import { TodoSelect } from '../models/todo-select.model';
import { TodoUpdate } from '../models/todo-update.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  API_BASE_URL = 'http://localhost:9000'

  constructor(
    private http: HttpClient
  ) { }

  getTodoList(): Observable<TodoList> {
    return this.http.get<TodoList>(`${this.API_BASE_URL}/todoList`)
  }

  createTodo(todo: TodoCreate): Observable<TodoCreate> {
    return this.http.post<TodoCreate>(`${this.API_BASE_URL}/newTodoSave`,todo, httpOptions).pipe(catchError(this.handleError<TodoCreate>('createTodo')));
  }

  deleteTodo(id: number): Observable<TodoDelete> {
    return this.http.delete<TodoDelete>(`${this.API_BASE_URL}/deleteTodo/${id}`).pipe(catchError(this.handleError<TodoDelete>('deleteTodo')));
  }

  getTodoById(id: number): Observable<TodoSelect> {
    return this.http.get<TodoSelect>(`${this.API_BASE_URL}/editTodo/${id}`)
  }

  updateTodo(todo: TodoUpdate): Observable<TodoUpdate> {
    return this.http.put<TodoUpdate>(`${this.API_BASE_URL}/editTodoSave`,todo, httpOptions).pipe(catchError(this.handleError<TodoUpdate>('updateTodo')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.error(error.message);

      return of(result as T);
    };
  }

}
