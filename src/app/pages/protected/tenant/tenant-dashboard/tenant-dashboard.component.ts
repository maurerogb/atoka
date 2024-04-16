import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './tenant-dashboard.component.html',
  styleUrl: './tenant-dashboard.component.scss'
})
export class TenantDashboardComponent {

  userId: any;
  visit: any
  constructor(
    private dashboardService : DashboardService,
    private router : Router
  ){}

  ngOnInit(): void{
    this.userId = localStorage.getItem('userId');
    this.getRecentVisit()
  }

  getRecentVisit(){
    this.dashboardService.getRecentVisit(this.userId).subscribe((res: any)=>{
      this.visit = res.data.slice(0,3)
      console.log(res)
    })
  }

}
