import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd  } from '@angular/router';
import { DashboardNavComponent } from '../../../../components/dashboard-nav/dashboard-nav.component';
import { DashboardSidebarComponent } from '../../../../components/dashboard-sidebar/dashboard-sidebar.component';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-tenant-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardSidebarComponent,DashboardNavComponent],
  templateUrl: './tenant-layout.component.html',
  styleUrl: './tenant-layout.component.scss'
})
export class TenantLayoutComponent {

  currentRoute!: string;

  constructor(
    private router: Router
    ) { }

    ngOnInit(): void {
      this.currentRoute = this.extractRoute(this.router.url);
      console.log(this.currentRoute)

      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.currentRoute = this.extractRoute(event.url);
      });
    }

    private extractRoute(url: string): string {
      const parts = url.split('/');
      if (parts.length === 3 && parts[2] === 'tenant') {
        return 'dashboard';
      }
      return parts[parts.length - 1];
    }


  showNav = false;
  navList = [
    {
      name: 'Dashboard',
      routerLink: '/app/tenant',
      exact: true,
      activeIcon: 'assets/svg/dashboard.svg',
      inactiveIcon: 'assets/svg/dashboard-inactive.svg',
    },
    {
      name: 'Location',
      routerLink: '/app/tenant/location',
      activeIcon: 'assets/svg/location.svg',
      inactiveIcon: 'assets/svg/location.svg',
    },
    {
      name: 'Incident',
      routerLink: '/app/tenant/incident',
      activeIcon: 'assets/svg/incident.svg',
      inactiveIcon: 'assets/svg/incident.svg',
    },
    {
      name: 'Tenant',
      routerLink: '/app/tenant/tenant',
      activeIcon: 'assets/svg/employee.svg',
      inactiveIcon: 'assets/svg/employee.svg',
    }

  ];

  bottomNav = [
    {
      name: 'Account',
      routerLink: '/app/tenant/account',
      activeIcon: 'assets/svg/employee.svg',
      inactiveIcon: 'assets/svg/employee.svg',
    },
    {
      name: 'Settings',
      routerLink: '/app/tenant/settings',
      activeIcon: 'assets/svg/employee.svg',
      inactiveIcon: 'assets/svg/employee.svg',
    },
    {
      name: 'Logout',
      routerLink: '/logout',
      activeIcon: 'assets/svg/employee.svg',
      inactiveIcon: 'assets/svg/employee.svg',
    }
  ]

  openNav(){
    this.showNav =!this.showNav
    console.log(this.showNav)
  }



}
