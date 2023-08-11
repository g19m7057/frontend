// jwt.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request here if needed
    const jwToken = localStorage.getItem('jwToken');

    // If a JWT exists, clone the request and add the JWT to the Authorization header
    if (jwToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwToken}`
        }
      });
    }
    
    return next.handle(request);
  }
}
