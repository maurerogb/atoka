import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { environment } from '../../assets/config';
import { loginInfo } from '../model/authentication';



@Injectable({
  providedIn: 'root'
})


export class HttpService<T> {
  private _httpOptions: any;

  testMode = environment.testMode;
   localUrl = environment.localUrl;
    remoteUrl = environment.remoteUrl;

  constructor(public httpClient: HttpClient) { }
  baseUrl = this.testMode ? this.localUrl : this.remoteUrl;

  protected get<T>(url: any, options?: any): Observable<T> {
    url = this.baseUrl + url;
    return this.httpClient.get<T>(url, {'headers':this.header()}).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected post<T>(url: any, payload: any, options?: any): Observable<T> {
    url = this.baseUrl + url;
    return this.httpClient.post<T>(url, payload,  {'headers':this.header()}).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected filePost(url: any, payload: any, options?: any): Observable<T> {
    url = this.baseUrl + url;
    return this.httpClient.post<T>(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected patch<T>(url: any, payload: any, options?: any): Observable<T> {
    url = this.baseUrl + url;
    return this.httpClient.patch<T>(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }
  protected put<T>(url: any, payload?: any, options?: any): Observable<T> {
    url = this.baseUrl + url;
    return this.httpClient.put<T>(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }
  protected delete<T>(url: any, options?: any): Observable<T> {
    url = this.baseUrl + url;
    return this.httpClient.delete<T>(url, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  getFile(url: string, options?: any) {
    url = this.baseUrl + url;
    return this.httpClient
      .get(url, { params: options, responseType: 'blob' })
      .pipe(
        map((body: any) => body),
        catchError(this.handleError)
      );
  }

  private header  (): HttpHeaders {
   let user :loginInfo =<loginInfo> JSON.parse (localStorage.getItem('userData') ?? "");

    return new HttpHeaders().set('userId' ,user.userId ).set('Authorization', `Bearer ${user.token}`,)

  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`,
        error
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      JSON.stringify({
        name: error.name,
        status: error.status,
        message: error.message,
        error: error.error,
        errors: error,
      })
    );
  }
}


