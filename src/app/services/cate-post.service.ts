import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = `http://localhost:3001/categoriesPosts`

@Injectable({
  providedIn: 'root'
})
export class CatePostService {

  constructor(private http: HttpClient) { }

  getCatePost(): Observable
}
