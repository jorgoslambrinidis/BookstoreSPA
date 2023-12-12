import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { environment } from 'src/environments/environment';
import { MainService } from './main.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // props
  private baseUrl: string = environment.apiUrl + 'Auth/';  // https://localhost:7194/api/Auth/

  constructor(
    private httpClient: HttpClient,
    private mainService: MainService
  ) { }

  login(loginModel: Login): Observable<Login> {
    const url = this.mainService.createUrl(this.baseUrl, 'login');
    return this.httpClient.post<Login>(url, loginModel);
  }

}
