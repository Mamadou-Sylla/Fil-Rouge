import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient, private router: Router) { }
  private baseUrl = 'http://127.0.0.1:8000/api';
  public nameAutorization = 'fil_rouge';
  public localStorage  = window.localStorage;
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
                   this.router.navigate(['/home']);
              },
      httpError => console.log(httpError.error.message)
    );
  }
  // tslint:disable-next-line:typedef
  decodeToken(){
    return  this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token') as string) : null;
  }


  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_Admin': {
        this.router.navigate(['admin']);
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
}
