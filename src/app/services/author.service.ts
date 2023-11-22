import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from '../models/author';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  // props
  // props
  baseUrl: string = environment.apiUrl + 'Author/';

  constructor(
    private http: HttpClient,
    private mainService: MainService
  ) { }

  getAllAuthors(): Observable<Author[]> {
    const url = this.mainService.createUrl(this.baseUrl, 'Authors');
    return this.http.get<Author[]>(url); //https://localhost:7194/api/Author/Authors
  }

  addAuthor(author: Author): Observable<Author> {
    const url = this.mainService.createUrl(this.baseUrl, 'Add');
    return this.http.post<Author>(url, author);
  }

  //#region helper functions

  //#endregion

}
