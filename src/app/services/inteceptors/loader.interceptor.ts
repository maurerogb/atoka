import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { Inject, inject } from '@angular/core';
import { LoadingService } from '../loading.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  if (req.context.get(SkipLoading)) {
    return next(req);
  }

  loadingService.loadingOn();
  return next(req).pipe(
    finalize(() => {
      loadingService.loadingOff()
    })
  )
};


export const SkipLoading =
  new HttpContextToken<boolean>(() => false);
