import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INavItem } from '../../model/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {

  @Input() navList!: INavItem[];
  @Input() buttomNav!: INavItem[];



}
