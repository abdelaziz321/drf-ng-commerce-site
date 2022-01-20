import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class SetAuthorizationHeaderInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isRequestToOurBackend = request.url.startsWith(environment.baseUrl);

    if (isRequestToOurBackend && this.authService.currentAccessToken !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.currentAccessToken}`
        }
      });
    }

    return next.handle(request);
  }
}
