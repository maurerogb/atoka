import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { AuthService } from 'src/app/pages/auth/auth.service';
import { AuthenticationService } from '../authentication.service';


const testMode = true;
const remoteUrl = 'http://dstatoka-001-site7.htempurl.com/api/'
const localUrl = 'https://localhost:5001/api/';
/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  baseUrl = '';
  constructor(private authService: AuthenticationService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.baseUrl = testMode ? localUrl : remoteUrl;
console.log(this.baseUrl);

    // let headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.authService.token}`,
    //   'userId': this.authService.userId
    // });

    // if (
    //   !/^(http|https):/i.test(request.url) &&
    //   !request.url.includes('assets')
    // ) {
    //   const url = request.url;
    //   if (
    //     !request.url.includes('assets')) {
    //     if (this.authService.token) {
    //       request = request.clone({
    //         url: this.baseUrl + request.url,
    //         headers: headers,
    //       });
    //     } else {
    //       request = request.clone({
    //         url: this.baseUrl + request.url,
    //         headers: headers,
    //       });
    //     }
    //   }
    // }
    return next.handle(request);
  }
}
