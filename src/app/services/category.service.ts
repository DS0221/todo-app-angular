import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CategoryList } from '../models/category-list.model';
import { HttpHeaders } from '@angular/common/http';

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.error(error.message);

      return of(result as T);
    };
  }
}
