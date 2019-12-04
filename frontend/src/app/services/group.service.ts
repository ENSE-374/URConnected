import {Injectable} from '@angular/core';
import {Group} from '../models/group.model';
import {Tag} from '../models/tag.model';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Message } from '../models/Message';
import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }

  groups: Group[] = [    
  ];

  private _URLGroups = 'http://localhost:3000/groups';
  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this._URLGroups)
    .pipe(tap(result => result),
      catchError(this.errorHandler));     
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


  getMessages(id: number):Observable<Message[]> {
    //URL for get messages
    const _URLMessages:string = `http://localhost:3000/groups/${id}`;
    return this.http.get<Message[]>(_URLMessages)
           .pipe(tap(result => result),
             catchError(this.errorHandler));
  }

  //URL for create messages
  private _URLCreateMessage:string = "http://localhost:3000/messages";
 
  createMessage(data:string, groupId: number, userId: string): Observable<Message>{
   const toSend:Message =  {group_id: groupId, sender: userId, text: data};
        return this.http.post<Message>(this._URLCreateMessage, toSend)
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
