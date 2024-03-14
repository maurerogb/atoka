import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantLayoutComponent } from './tenant-layout/tenant-layout.component';
import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';

const routes: Routes = [
  {path: '', component: TenantLayoutComponent,

  children: [
    {path: '', component: TenantDashboardComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
