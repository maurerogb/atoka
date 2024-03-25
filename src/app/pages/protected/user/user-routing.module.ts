import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';
import { IncidentComponent } from './incident/incident.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './account/profile/profile.component';
import { EmploymentStatusComponent } from './account/employment-status/employment-status.component';
import { ClaimPropertyComponent } from './account/claim-property/claim-property.component';

const routes: Routes = [
  {path: '', component: UserLayoutComponent,

  children: [
    {path: '', component: DashboardComponent},
    {path: 'location', component: LocationComponent},
    {path: 'incident', component: IncidentComponent},
    {path: 'account', component: AccountComponent},
    {path: 'claim-property', component: ClaimPropertyComponent},
    {path: 'employment-status', component: EmploymentStatusComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
