import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const PROTECTED_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
]
