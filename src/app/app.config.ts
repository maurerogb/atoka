import { ApplicationConfig } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { httprequestInterceptor } from './services/inteceptors/httprequest.interceptor';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing()), provideNoopAnimations(), provideNoopAnimations(),
    provideHttpClient(withInterceptors([httprequestInterceptor])),
    BrowserModule, provideClientHydration(), provideToastr( {closeButton:true})
  ]
};
