import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    register(user: User) {
        return this.http.post('http://localhost:3000/register', user);
    }

    login(email, password) {
        return this.http.post<any>('http://localhost:3000/login', { email, password })
            .pipe(map(data => {
                if (data.user.verified) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data));
                }
                this.currentUserSubject.next(data);
                return data;
            }));
    }

    verify(id) {
        console.log(id);
        return this.http.post<any>('http://localhost:3000/verify', id)
            .pipe(map(data => {
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.currentUserSubject.next(data);
                return data;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
