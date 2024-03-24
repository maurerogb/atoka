import { CompleteRegitrationComponent } from './complete-regitration.component';
import { Routes } from "@angular/router";
import { ValidateAddressComponent } from "./validate-address/validate-address.component";
import { BusinessAccountComponent } from './business-account/business-account.component';

export const COMPLETE_REGISTRATION_ROUTES: Routes = [
  {
    path: '',
    component: CompleteRegitrationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'validate-address',
      },
       {
        path:'validate-address' , component:ValidateAddressComponent,
      }
      ,
       {
        path:'business-registration' , component:BusinessAccountComponent,
      },
    ]
  }

]
