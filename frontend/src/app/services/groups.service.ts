import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Message } from '../models/Message';
import { Tag } from '../models/Tag';
import { Member } from '../models/Member'
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
//TODO: Update URLs for get/post Requests
  private _URL:string = "/assets/deleteThis.json";
  constructor(private http:HttpClient) { }

  getMessages(id: number):Observable<Message[]> {
    return this.http.get<Message[]>(this._URL)
           .pipe(tap(result => result),
             catchError(this.errorHandler));
  }


  createMessage(data:Message):Observable<object>{
    console.log(data);
    return this.http.post(this._URL, data)
    .pipe(tap(result => result));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  private _URL2:string = "/assets/deleteThis2.json";

  getTags():Observable<Tag[]> {
    return this.http.get<Tag[]>(this._URL2)
           .pipe(catchError(this.errorHandler));
  }
  getMembers():Observable<Member[]> {
    return this.http.get<Member[]>(this._URL)
           .pipe(catchError(this.errorHandler))

  }

}
