import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const {accessToken} = this.auth.currentUser.value || {};
    if(accessToken){
      request = request.clone({
        headers: request.headers.append("Authorization",`Bearer ${accessToken}`)
      })
    }
    return next.handle(request);
  }
}


// Request ========> interceptor ==========> server 