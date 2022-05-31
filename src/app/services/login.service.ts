import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL: string = 'http://localhost:3001/users';
  constructor( private http: HttpClient) { }
  addUser(user: any): Observable<IUser>{
      return this.http.post<IUser>(`${this.API_URL}`, user)
  }
}
