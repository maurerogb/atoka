import { Component } from '@angular/core';
import { DashboardNavComponent } from '../../../../components/dashboard-nav/dashboard-nav.component';
import { DashboardSidebarComponent } from '../../../../components/dashboard-sidebar/dashboard-sidebar.component';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    DashboardNavComponent,
    DashboardSidebarComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {
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
      if (parts.length === 3 && parts[2] === 'user') {
        return 'dashboard';
      }
      return parts[parts.length - 1];
    }


  showNav = false;
  navList = [
    {
      name: 'Dashboard',
      routerLink: '/app/user',
      exact: true,
      activeIcon: 'assets/svg/dashboard.svg',
      inactiveIcon: 'assets/svg/dashboard-inactive.svg',
    },
    {
      name: 'Location',
      routerLink: '/app/user/location',
      activeIcon: 'assets/svg/location.svg',
      inactiveIcon: 'assets/svg/location.svg',
    },
    {
      name: 'Incident',
      routerLink: '/app/user/incident',
      activeIcon: 'assets/svg/incident.svg',
      inactiveIcon: 'assets/svg/incident.svg',
    }

  ];

  bottomNav = [
    {
      name: 'Settings',
      routerLink: '/app/user/settings',
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
