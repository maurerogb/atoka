import { Routes } from "@angular/router";

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'register',
      },
      {
        path: 'register',
        loadChildren: () => import('./registration/registration.route').then(m => m.REGISTRATION_ROUTES)
      }

    ]

  }
]
