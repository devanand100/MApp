import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
// import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export class AuthInterCeptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.has('Authorization')) {
      return next.handle(req);
    }

    const token = localStorage.getItem('token');
    const updatedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(updatedReq);
  }
}
