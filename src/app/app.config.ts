import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { httprequestInterceptor } from './services/inteceptors/httprequest.interceptor';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './services/inteceptors/error.interceptor';
import { loaderInterceptor } from './services/inteceptors/loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNoopAnimations(), provideNoopAnimations(),
  provideHttpClient(withInterceptors([httprequestInterceptor, errorInterceptor, loaderInterceptor])),
    BrowserModule, provideClientHydration(), provideToastr({ closeButton: true })
  ]
};
