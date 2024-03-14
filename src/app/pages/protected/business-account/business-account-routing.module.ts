import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessAccountLayoutComponent } from './business-account-layout/business-account-layout.component';
import { LocationComponent } from './location/location.component';
import { IncidentComponent } from './incident/incident.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {path: '', component: BusinessAccountLayoutComponent,

  children:[
    {path: '', component: DashboardComponent},
    {path: 'location', component: LocationComponent},
    {path: 'incident', component: IncidentComponent},
    {path: 'employees', component: EmployeesComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessAccountRoutingModule { }
