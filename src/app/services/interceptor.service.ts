import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
              private  injector: Injector) {}

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  intercept(req, next) {
    // add authorization header with jwt token if available
    let authService = this.injector.get(AuthService);
    let tokenized = req.clone({
      setHeaders: {
        // @ts-ignore
        Authorization: `Bearer ${authService.myToken()}`
      }
    });
    return next.handle(tokenized);
  }
}
