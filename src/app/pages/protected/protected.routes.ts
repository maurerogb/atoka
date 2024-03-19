import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ValidateAddressComponent } from "./validate-address/validate-address.component";

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
        path:'validate-address' , component:ValidateAddressComponent,
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
