import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  private baseUrl = 'http://127.0.0.1:8000/api';
  public nameAutorization = 'fil_rouge';
  public localStorage  = window.localStorage;
  public currentUser: Observable<UserModel>;
  private currentUserSubject: BehaviorSubject<UserModel>;

  // tslint:disable-next-line:typedef
  login(credentials: any){
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // tslint:disable-next-line:typedef
  getToken(credentials: any){
    this.login(credentials).subscribe(
      token  => {
        console.log(token);
        // @ts-ignore
        localStorage.setItem('token', token.token);
        this.router.navigate(['/default/admin']);
              },
      httpError => console.log(httpError.error.message)
    );
  }
  decodeToken(): unknown{
    return  this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token') as string) : null;
  }

   currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }


  // tslint:disable-next-line:typedef
  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_Admin': {
        this.router.navigate(['default']);
        // @ts-ignore
        this.localStorage.setItem('token', null) ;
        break;
      }
      case 'ROLE_Formateur': {
        this.router.navigate(['formateur']);
        // @ts-ignore
        this.localStorage.setItem('token', null) ;
        break;
      }
      case 'ROLE_Apprenant': {
        // @ts-ignore
        this.localStorage.setItem('token', null) ;
        this.router.navigate(['apprenant']);
        break;
      } case 'ROLE_CM': {
        // @ts-ignore
        this.localStorage.setItem('token', null) ;
        this.router.navigate(['cm']);
        break;
      }
      default: {
        this.router.navigate(['register']);
        break;
      }
    }


  }
  // tslint:disable-next-line:typedef
  isLoggenIn(){
    return !!localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('currentUser');
    // @ts-ignore
    this.currentUserSubject.next(null);
    if(!this.currentUser){
      this.router.navigate(['login']);
    }
    this.router.navigate(['login']);
  }
  // tslint:disable-next-line:typedef
  myToken() {
   return localStorage.getItem('token');
  }
}
