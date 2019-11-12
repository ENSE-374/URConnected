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
  constructor(private http:HttpClient) { }

  //URL for get messages
  private _URLMessages:string = "/assets/deleteThis.json";

  getMessages(id: number):Observable<Message[]> {
    return this.http.get<Message[]>(this._URLMessages)
           .pipe(tap(result => result),
             catchError(this.errorHandler));
  }

  //URL for create messages
  private _URLCreateMessage:string = "/assets/deleteThis.json";
 
  createMessage(data:Message):Observable<object>{
    console.log(data);
    return this.http.post(this._URLCreateMessage, data)
    .pipe(tap(result => result));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  //URL for get tags
  private _URLTag:string = "/assets/deleteThis2.json";
  
  getTags():Observable<Tag[]> {
    return this.http.get<Tag[]>(this._URLTag)
           .pipe(catchError(this.errorHandler));
  }

  //URL for get members
  private _URLMembers = 'someURL';
  getMembers():Observable<Member[]> {
    return this.http.get<Member[]>(this._URLMembers)
           .pipe(catchError(this.errorHandler));
  }

}
