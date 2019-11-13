import {Injectable} from '@angular/core';
import {Group} from '../models/group.model';
import {Tag} from '../models/tag.model';

import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Message } from '../models/Message';
import { Member } from '../models/Member'
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }
  groups: Group[] = [
    {
      id: 1,
      tags: [new Tag('Engineering')],
      size: 44,
      isSubscribed: true,
    },
    {
      id: 2,
      tags: [new Tag('Engineering'), new Tag('Software')],
      size: 55,
      isSubscribed: false,
    },
    {
      id: 3,
      tags: [new Tag('Business'), new Tag('Accounting')],
      size: 20,
      isSubscribed: false,
    }
  ];

  public getAllGroups(): Group[] {
    return this.groups;
  }
  public addMember(id: number) {
    this.groups.find(group => group.id === id).size = this.groups.find(group => group.id === id).size + 1;
  }

  public removeMember(id: number) {
    this.groups.find(group => group.id === id).size = this.groups.find(group => group.id === id).size - 1;
  }

  public getSubscribedGroups(): Group[] {
    return this.groups.filter(data => data.isSubscribed === true);
  }

  public subscribeToGroup(id: number) {
    this.groups.find(group => group.id === id).isSubscribed = true;
  }

  public unsubscribeToGroup(id: number) {
    this.groups.find(group => group.id === id).isSubscribed = false;
  }

  //TODO: Update URLs for get/post Requests


  //URL for get messages
  private _URLMessages:string = "/assets/deleteThis.json";

  getMessages(id: number):Observable<Message[]> {
    return this.http.get<Message[]>(this._URLMessages)
           .pipe(tap(result => result),
             catchError(this.errorHandler));
  }

  //URL for create messages
  private _URLCreateMessage:string = "/assets/deleteThis3.json";
 
  createMessage(data:Message):Observable<Message>{
    //console.log(data, "service");
    return this.http.post<Message>(this._URLCreateMessage, data)
          .pipe(tap(result => result),
            catchError(this.errorHandler));
  }


  //URL for get tags
  private _URLTag:string = "/assets/deleteThis2.json";
  
  getTags():Observable<Tag[]> {
    return this.http.get<Tag[]>(this._URLTag)
           .pipe(catchError(this.errorHandler));
  }

   errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
