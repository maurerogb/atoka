import { Component } from '@angular/core';
import { DashboardSidebarComponent } from '../../../../components/dashboard-sidebar/dashboard-sidebar.component';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from '../../../../components/dashboard-nav/dashboard-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-account-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardSidebarComponent,DashboardNavComponent],
  templateUrl: './business-account-layout.component.html',
  styleUrl: './business-account-layout.component.scss'
})
export class BusinessAccountLayoutComponent {
  showNav = false;
  navList = [
    {
      name: 'Dashboard',
      routerLink: '/app/business-account',
      exact: true,
      activeIcon: 'assets/svg/dashboard.svg',
      inactiveIcon: 'assets/svg/dashboard-inactive.svg',
    },
    {
      name: 'Location',
      routerLink: '/app/business-account/location',
      activeIcon: 'assets/svg/location.svg',
      inactiveIcon: 'assets/svg/location.svg',
    },
    {
      name: 'Incident',
      routerLink: '/app/business-account/incident',
      activeIcon: 'assets/svg/incident.svg',
      inactiveIcon: 'assets/svg/incident.svg',
    },
    {
      name: 'Employees',
      routerLink: '/app/business-account/employees',
      activeIcon: 'assets/svg/employee.svg',
      inactiveIcon: 'assets/svg/employee.svg',
    }
  ];

  openNav(){
    this.showNav =!this.showNav
    console.log(this.showNav)
  }
}
