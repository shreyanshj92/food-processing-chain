import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from './models/roles';
import { Router } from '@angular/router';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
      const user = {
          id: 101,
          firstName: "Shreyansh",
          lastName: "Jain",
          username: "admin",
          role: Role.User,
          token: "xyz",
          url:"admin"
        }
        this.userSubject = new BehaviorSubject<User>(user);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: string, password: string) {
     const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin, url:"../admin"},
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User, url:"user" }
];

        const user = users.filter(user => user.username === username && user.password === password)[0];
      localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
        // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('user', JSON.stringify(user));
        //         this.userSubject.next(user);
        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        const user = {
          id: 0,
          firstName: "",
          lastName: "",
          username: "",
          role: Role.Admin,
          token: "",
          url:""
        };
        this.userSubject.next(user);
        this.router.navigate(['/login']);
    }
}
