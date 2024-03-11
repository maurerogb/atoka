import { Routes } from "@angular/router";
import { AccountTypeComponent } from "./account-type.component";
import { AccountTypeFormComponent } from "./account-type-form/account-type-form.component";

export const ACCOUNT_TYPE_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing',
      },
      {
        path: 'landing',
        component: AccountTypeComponent
      },
      {
        path: 'form',
        component: AccountTypeFormComponent,
      }
    ]
  }

]
