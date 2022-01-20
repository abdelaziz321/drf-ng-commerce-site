import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';


@Injectable()
export class RestrictUnauthorizedRequestsInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(err => {
          if ([401, 403].includes(err.status) && this.authService.currentAccount) {
            this.authService.logout();
          }
          return throwError(err);
        })
      )
  }
}
