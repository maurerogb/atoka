import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicServiceLayoutComponent } from './public-service-layout/public-service-layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
// import { AccountComponent } from './account/account.component';
import { IncidentComponent } from './incident/incident.component';
import { LocationComponent } from './location/location.component';
import { SettingsComponent } from './settings/settings.component';
import { EmployeeComponent } from './employee/employee.component';
import { UrbanPlanningComponent } from './urban-planning/urban-planning.component';

const routes: Routes = [
  {path: '', component: PublicServiceLayoutComponent,

  children: [
    {path: '', component: DashboardComponent},
    {path: 'location', component: LocationComponent},
    {path: 'incident', component: IncidentComponent},
    // {path: 'account', component: AccountComponent},
    {path: 'employees', component: EmployeeComponent},
    {path: 'urban-planning', component: UrbanPlanningComponent},
    // {path: 'claim-property', component: ClaimPropertyComponent},
    // {path: 'employment-status', component: EmploymentStatusComponent},
    // {path: 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicServiceRoutingModule { }
