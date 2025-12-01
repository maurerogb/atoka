
import { LoginComponent } from './login/login.component';
import { Routes } from "@angular/router";
import { ProtectedComponent } from './protected.component';
import { LogoutComponent } from './logout/logout.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signin',
      },
      {
        path: 'logout', component: LogoutComponent
        //loadChildren: () => import('./registration/registration.route').then(m => m.REGISTRATION_ROUTES)
      },
      {
        path: 'signin', component: LoginComponent
        //loadChildren: () => import('./registration/registration.route').then(m => m.REGISTRATION_ROUTES)
      },
      {
        path: 'register',
        loadChildren: () => import('./registration/registration.route').then(m => m.REGISTRATION_ROUTES)
      }

    ]

  }
]
