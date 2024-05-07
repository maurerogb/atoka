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
        path:'complete-registration' , loadChildren: ()=> import('./complete-regitrationy/complete-regitration.route').then(m=> m.COMPLETE_REGISTRATION_ROUTES),
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
      {
        path: 'public-service',
        loadChildren: () => import('./public-service/public-service.module').then(m => m.PublicServiceModule),
      },


    ]
  }
]
