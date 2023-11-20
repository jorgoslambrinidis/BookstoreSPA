import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // props
  baseUrl: string = environment.apiUrl + 'Book/';  // https://localhost:7194/api/Book/
  // while route == https://localhost:7194/api/book/books

  constructor(
    private http: HttpClient
  ) { }

  getAllBooks(): Observable<Book[]> {
    const url = this.createUrl(this.baseUrl, 'Books');
    return this.http.get<Book[]>(url); //https://localhost:7194/api/Book/Books
  }


  //#region helper functions
  private createUrl(baseUrl: string, action: string): string {
    // return baseUrl.concat(action); // the same as below
    // return baseUrl + action; // the same as below
    return `${baseUrl}${action}`;
  }

  dummyString(): string {
    // return 'This is a dummy string ' + this.dummyValue(); // option 1
    return `This is a dummy string ${this.dummyValue()}, nie mozeme da si prodolzime ovde so stringot ${this.dummyValue()}`; // option 2
  }

  private dummyValue(): string {
    return 'Jorgos';
  }
  //#endregion

}
