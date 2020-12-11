import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient, private router: Router) { }
  private baseUrl = 'http://http:localhost:3000/login';
  public localStorage  = window.localStorage;
  // tslint:disable-next-line:typedef
  login(credentials: any){
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // tslint:disable-next-line:typedef
  getToken(credentials: any){
    this.login(credentials).subscribe(
      token  => {
                  localStorage.setItem('token', token.token);
                  this.router.navigate(['/home']);
              },
      httpError => console.log(httpError.error.message)
    );
  }
  // tslint:disable-next-line:typedef
  decodeToken(){
    return  this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token') as string) : null;
  }
  // tslint:disable-next-line:typedef
  isLoggenIn(){
    return !!localStorage.getItem('token');
  }
}
