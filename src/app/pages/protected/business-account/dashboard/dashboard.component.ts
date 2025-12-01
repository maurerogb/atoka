import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DashboardService } from '../../../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SecureVisitAddress } from '../../../../model/secure-visit';
import { IncidentService } from '../../../../services/incident.service';

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
  incidents?: any[]
  constructor(private incidentService: IncidentService,
    private dashboardService: DashboardService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getIncident()
    this.getAllReportedIncident()
  }

  getIncident() {
    this.incidentService.getIncident().subscribe((res) => {
      this.visit = res.data
      console.log(res)
    })
  }


  getAllReportedIncident() {
    this.incidentService.GetAllReportedIncident().subscribe((res: any) => {
      this.incidents = res.data;
    });
  }

  goToEmployeePage() {
    this.router.navigateByUrl('/app/business-account/employees')
  }

}
