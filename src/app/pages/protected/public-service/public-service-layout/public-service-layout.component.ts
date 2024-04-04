import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { DashboardNavComponent } from '../../../../components/dashboard-nav/dashboard-nav.component';
import { DashboardSidebarComponent } from '../../../../components/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-public-service-layout',
  standalone: true,
  imports: [
    DashboardNavComponent,
    DashboardSidebarComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './public-service-layout.component.html',
  styleUrl: './public-service-layout.component.scss'
})
export class PublicServiceLayoutComponent {
  currentRoute!: string;

  constructor(
    private router: Router
    ) { }

    ngOnInit(): void {
      this.currentRoute = this.extractRoute(this.router.url);

      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.currentRoute = this.extractRoute(event.url);
      });
    }

    private extractRoute(url: string): string {
      const parts = url.split('/');
      if (parts.length === 3 && parts[2] === 'public-service') {
        return 'dashboard';
      }
      return parts[parts.length - 1];
    }


  showNav = false;
  navList = [
    {
      name: 'Dashboard',
      routerLink: '/app/public-service',
      exact: true,
      activeIcon: 'assets/svg/dashboard.svg',
      inactiveIcon: 'assets/svg/dashboard-inactive.svg',
    },
    {
      name: 'Location',
      routerLink: '/app/public-service/location',
      activeIcon: 'assets/svg/location.svg',
      inactiveIcon: 'assets/svg/location.svg',
    },
    {
      name: 'Incident',
      routerLink: '/app/public-service/incident',
      activeIcon: 'assets/svg/incident.svg',
      inactiveIcon: 'assets/svg/incident.svg',
    },
    {
      name: 'Employees',
      routerLink: '/app/public-service/employees',
      activeIcon: 'assets/svg/employee.svg',
      inactiveIcon: 'assets/svg/employee.svg',
    },
    {
      name: 'Urban Planning',
      routerLink: '/app/public-service/urban-planning',
      activeIcon: 'assets/svg/urban-planning.svg',
      inactiveIcon: 'assets/svg/urban-planning.svg',
    }

  ];

  bottomNav = [
    {
      name: 'Settings',
      routerLink: '/app/public-service/settings',
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
