import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Item } from '../models/item'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiBaseUrl = 'http:localhost:3000/api/menu/items/';

  constructor(
    private http: HttpClient;
  ) { }

  createItem(item: Item): Observable<Object>{
    const url = this.postUrl;
    return this.http.post<Object>(url, item)
  }



  getItem(id: string): Observable<Item> {
    const url =  this.apiBaseUrl + id;
    return this.http.get<Item>(url)
  }

  //get them all
  getItems(): Observable<Item[]> {
    const url = this.apiBaseUrl + "Item";
    return this.http.get<Item[]>(url);
  }

  updateItem(item: Item, id: string): Observable<Object> {
    const url = this.apiBaseUrl + id;
    return this.http.put<Object>(url, item);
  }

  removeItem(id: string): Observable<Object> {
    const url = this.apiBaseUrl + id;
    return this.http.delete<Object>(url);
  }

}
