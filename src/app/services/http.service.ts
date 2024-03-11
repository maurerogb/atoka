import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService<T> {
  private _httpOptions: any;

  constructor(public httpClient: HttpClient) { }

  protected get<T>(url: any, options?: any): Observable<T> {
    return this.httpClient.get<T>(url, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected post<T>(url: any, payload: any, options?: any): Observable<T> {
    return this.httpClient.post<T>(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected filePost(url: any, payload: any, options?: any): Observable<T> {
    return this.httpClient.post<T>(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected patch<T>(url: any, payload: any, options?: any): Observable<T> {
    return this.httpClient.patch<T>(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }
  protected put<T>(url: any, payload?: any, options?: any): Observable<T> {
    return this.httpClient.put<T>(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }
  protected delete<T>(url: any, options?: any): Observable<T> {
    return this.httpClient.delete<T>(url, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  getFile(url: string, options?: any) {
    return this.httpClient
      .get(url, { params: options, responseType: 'blob' })
      .pipe(
        map((body: any) => body),
        catchError(this.handleError)
      );
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


