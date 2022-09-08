import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { Goal } from './model/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalApiService {

  baseUrl: string = "http://localhost:8081/goals";
  
  constructor(private http: HttpClient) {}

  // Find all goals api
  findAll(): Observable<any>{
    return this.http.get(`${this.baseUrl}`).pipe(catchError(this.handleError));
  }

  // Find goals by user
  findByUser(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/user/${userId}`);
   }

    // Find all goals api with pagination
    findAllWithPagination(page:number = 0, size: number = 5): Observable<any>{
      return this.http.get<any>(`${this.baseUrl}/pagination?page=${page}&size=${size}`).pipe(catchError(this.handleError));
    }

  // Find goal by id api
  findById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`).pipe(catchError(this.handleError));
  }

  // Find goal by name api
  findByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`).pipe(catchError(this.handleError));
  }

  // Save
  save(goal: Goal): Observable<any>{
    return this.http.post(this.baseUrl, goal).pipe(catchError(this.handleError));
  }

  // Update
  update(goal: Goal): Observable<any>{
    return this.http.put(this.baseUrl, goal).pipe(catchError(this.handleError));
  }

  // Delete
  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/id/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error()
    })
  }
}
