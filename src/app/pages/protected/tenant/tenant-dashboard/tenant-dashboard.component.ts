import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../components/button/button.component';
import { DashboardService } from '../../../../services/dashboard.service';

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
    // this.getRecentVisit()
  }

  getRecentVisit(){
    this.dashboardService.getRecentVisit(this.userId).subscribe((res: any)=>{
      this.visit = res.data.slice(0,3)
      console.log(res)
    })
  }

}
