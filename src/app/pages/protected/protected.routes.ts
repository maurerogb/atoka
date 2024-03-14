import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const PROTECTED_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'business-account',
      },
      {
        path: 'business-account',
        loadChildren: () => import('./business-account/business-account.module').then(m => m.BusinessAccountModule),
      },
      {
        path: 'tenant',
        loadChildren: () => import('./tenant/tenant.module').then(m => m.TenantModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
      },

    ]
  }
]
