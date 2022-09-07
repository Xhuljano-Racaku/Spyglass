import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8081/users";
  constructor(private http: HttpClient) { }

  public login(user : User):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`, user).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    console.log(error)
    return throwError(() => {
      throw new Error()
    })
  }
}
