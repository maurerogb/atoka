import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessAccountLayoutComponent } from './business-account-layout/business-account-layout.component';
import { LocationComponent } from './location/location.component';
import { IncidentComponent } from './incident/incident.component';
import { EmployeesComponent } from './employees/employees.component';
import { BusinessSettingsComponent } from './business-settings/business-settings.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { BranchComponent } from './branch/branch.component';

const routes: Routes = [
  {path: '', component: BusinessAccountLayoutComponent,

  children:[
    {path: '', component: DashboardComponent},
    {path: 'location', component: LocationComponent},
    {path: 'incident', component: IncidentComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'settings', component: BusinessSettingsComponent},
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'branch', component: BranchComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessAccountRoutingModule { }
