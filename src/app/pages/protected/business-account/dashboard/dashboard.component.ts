import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from '../../../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
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

  goToEmployeePage(){
    this.router.navigateByUrl('/app/business-account/employees')
  }

}
