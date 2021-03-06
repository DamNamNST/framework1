import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryPostType } from '../models/CatePost';

const url = `http://localhost:3001/categoriesPosts`;

@Injectable({
  providedIn: 'root',
})
export class CatePostService {
  constructor(private http: HttpClient) {}

  getCatePost(): Observable<CategoryPostType[]> {
    return this.http.get<CategoryPostType[]>(`${url}`);
  }
  getCateDetailPost(id: number | undefined): Observable<CategoryPostType> {
    return this.http.get<CategoryPostType>(`${url}/${id}`);
  }
  addCatePost(data: CategoryPostType): Observable<CategoryPostType> {
    return this.http.post<CategoryPostType>(url, data);
  }
  updateCatePost(data: CategoryPostType): Observable<CategoryPostType> {
    return this.http.put<CategoryPostType>(`${url}/${data.id}`, data);
  }
  deleteCatePost(id: number | undefined): Observable<CategoryPostType> {
    return this.http.delete<CategoryPostType>(`${url}/${id}`);
  }
}
