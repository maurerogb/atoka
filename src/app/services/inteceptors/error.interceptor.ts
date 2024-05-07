import { HttpHandlerFn, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next: HttpHandlerFn) => {
  let authService = inject(AuthenticationService)
  let toast = inject(ToastrService)
  return next(req).pipe(catchError((error) => {
    console.error('Error occurred while processing', error.message);



    //log.error('Request error', response.status);
    //console.log('response.status', response.status);
    if (error.status === 401) {
      if (!error?.url?.includes('authenticate')) {
        toast.error(error.error.message || 'Unauthorized, please login again');
        authService.logout();
      } else {
        toast.error(error.error.message);
      }
    }

    if (
      (error.status === 400 || error.status === 409) &&
      error.error.message != '804'
    ) {
      toast.error(error.error.message);
    }

    if (error.status === 404) {
      toast.error(error.error.message);
    }
    if (error.status === 406) {
      toast.error(error.error.message);
    }
    if (error.status === 504) {
      toast.error(error.error.message);
    }
    if (error.status === 500) {
      toast.error(error.error.message);
    }
    if (
      error.error.message === 'Token expired. Please provide a new token'
    ) {
      authService.logout();
    }
    if (error.status === 0) {
      toast.error('Network not available');
    }

    return throwError(() => error.message)
  }))
}








