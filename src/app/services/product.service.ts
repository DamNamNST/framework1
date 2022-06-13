import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../models/Product';

const url = `http://localhost:3001/products`;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  searchProduct(searchInput: string): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${url}?name_like=${searchInput}`);
  }

  getProduct(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(url);
  }

  getDetailProduct(id: number | undefined): Observable<ProductType> {
    return this.http.get<ProductType>(`${url}/${id}`);
  }

  addProduct(data: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(url, data);
  }

  updateProduct(data: ProductType): Observable<ProductType> {
    return this.http.put<ProductType>(`${url}/${data.id}`, data);
  }

  deleteProduct(id: number | undefined): Observable<ProductType> {
    return this.http.delete<ProductType>(`${url}/${id}`);
  }
  // getProduct(id: number): Observable<IProduct> {
  //   return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  // }
  // searchProduct(searchInput: string): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(`${this.API_URL}?name_like=${searchInput}`)
  // }

  // getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.API_URL);
  // }

  // removeProduct(id: number): Observable<IProduct> {
  //   return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
  // }

  // addProduct(product: any) {
  //   return this.http.post<IProduct>(`${this.API_URL}`, product)
  // }

  // updateProduct(product: IProduct) {
  //   return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product);
  // }
}
