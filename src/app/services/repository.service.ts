import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }
  getData(route: string): Observable<UserModel []> {
    return this.http.get<UserModel []>(route);
  }
  /*private createCompleteRoute=(route:string,envAddress:string)=>{
    return `${envAddress}/${route}`;
  }*/
  private generateHeaders = () => {
    return{
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
}
