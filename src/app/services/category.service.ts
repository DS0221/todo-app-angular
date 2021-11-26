import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CategoryList } from '../models/category-list.model';
import { HttpHeaders } from '@angular/common/http';
import { CategoryColorList } from '../models/category-color-list.model';
import { CategoryCreate } from '../models/category-create.model';
import { CategoryDelete } from '../models/category-delete.model';
import { CategorySelect } from '../models/category-select.model';
import { CategoryUpdate } from '../models/category-update.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_BASE_URL = 'http://localhost:9000'

  constructor(
    private http: HttpClient
  ) { }

  getCategoryList(): Observable<CategoryList> {
    return this.http.get<CategoryList>(`${this.API_BASE_URL}/categoryList`)
  }

  getCategoryColorList(): Observable<CategoryColorList> {
    return this.http.get<CategoryColorList>(`${this.API_BASE_URL}/categoryColorList`)
  }

  createCategory(category: CategoryCreate): Observable<CategoryCreate> {
    return this.http.post<CategoryCreate>(`${this.API_BASE_URL}/newCategorySave`,category, httpOptions).pipe(catchError(this.handleError<CategoryCreate>('createCategory')));
  }

  deleteCategory(id: number): Observable<CategoryDelete> {
    return this.http.delete<CategoryDelete>(`${this.API_BASE_URL}/deleteCategory/${id}`).pipe(catchError(this.handleError<CategoryDelete>('deleteCategory')));
  }

  getCategoryById(id: number): Observable<CategorySelect> {
    return this.http.get<CategorySelect>(`${this.API_BASE_URL}/editCategory/${id}`)
  }

  updateCategory(category: CategoryUpdate): Observable<CategoryUpdate> {
    return this.http.put<CategoryUpdate>(`${this.API_BASE_URL}/editCategorySave`,category, httpOptions).pipe(catchError(this.handleError<CategoryUpdate>('updateCategory')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.error(error.message);

      return of(result as T);
    };
  }
}
