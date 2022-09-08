import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8081/users";
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  findById(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/user/${userId}`)
  }

  public login(user : User):Observable<any>{
    
    return this.http.post(`${this.baseUrl}/login`, user).pipe(catchError(this.handleError));
  }

  
  public register(user : User):Observable<any>{
    return this.http.post(this.baseUrl, user).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error()
    })
  }

  setIsAuthenticated(x : boolean){
    this.isAuthenticated = x;
  }
}
