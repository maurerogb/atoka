import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantLayoutComponent } from './tenant-layout/tenant-layout.component';
import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { LocationComponent } from './location/location.component';
import { TenantComponent } from './tenant/tenant.component';
import { IncidentComponent } from './incident/incident.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', component: TenantLayoutComponent,

  children: [
    {path: '', component: TenantDashboardComponent},
    {path: 'location', component: LocationComponent},
    {path: 'tenant', component: TenantComponent},
    {path: 'incident', component: IncidentComponent},
    {path: 'settings', component: SettingsComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
