import { Component } from '@angular/core';
import { DashboardSidebarComponent } from '../../../../components/dashboard-sidebar/dashboard-sidebar.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { DashboardNavComponent } from '../../../../components/dashboard-nav/dashboard-nav.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-business-account-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardSidebarComponent,DashboardNavComponent],
  templateUrl: './business-account-layout.component.html',
  styleUrl: './business-account-layout.component.scss'
})
export class BusinessAccountLayoutComponent {

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
      if (parts.length === 3 && parts[2] === 'business-account') {
        return 'dashboard';
      }
      return parts[parts.length - 1];
    }

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

  bottomNav = [
    {
      name: 'Settings',
      routerLink: '/app/business-account/settings',
      activeIcon: 'assets/svg/Setting.svg',
      inactiveIcon: 'assets/svg/Setting.svg',
    },
    {
      name: 'Logout',
      routerLink: '/signin',
      activeIcon: 'assets/svg/Logout.svg',
      inactiveIcon: 'assets/svg/Logout.svg',
    }
  ]

  openNav(){
    this.showNav =!this.showNav
    console.log(this.showNav)
  }
}
