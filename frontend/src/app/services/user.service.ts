import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  //private _URLUser = 'http://localhost:3000/users';
  private _URLUserInfo = './assets/deleteThis-User.json';
  
  public getUserInfo(): Observable<User> {
    return this.http.get<User>(this._URLUserInfo)
    .pipe(tap(result => result),
      catchError(this.errorHandler));     
  }

  private _URLUserUpdate = './assets/deleteThis-UserUpdated.json';
  public updateUserInfo(param1:any, param2:any) {
    return this.http.get<User>(this._URLUserUpdate)
    .pipe(tap(result => result),
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}
