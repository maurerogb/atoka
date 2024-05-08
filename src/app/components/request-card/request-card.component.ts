import { ApprovalStatus } from './../../model/businessInfo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RemoveEmployeeComponent } from '../modals/remove-employee/remove-employee.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../modals/employee-details/employee-details.component';
import { RejectEmployeeComponent } from '../modals/reject-employee/reject-employee.component';
import { Router } from '@angular/router';
import { AtokaSearchService } from '../../services/atoka-search.service';
import { EmployeeService } from '../../services/employee.service';
import { SettingsService } from '../../services/settings.service';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../button/button.component';
import { Employee } from '../../model/businessInfo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponseCode } from '../../model/enums';

@Component({
  selector: 'app-request-card',
  standalone: true,

  imports: [MatSelectModule, ButtonComponent, MatMenuModule, CommonModule],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.scss'
})
export class RequestCardComponent implements OnInit {
  @Input() confirmStatus?: string
  @Input() details?: Employee;
  employeeForm?: FormGroup;
  public approvalStatus?= ApprovalStatus.APROVED
  public pendingRequest?= ApprovalStatus.PENDING

  @Output() requestUpdate:  EventEmitter<string> = new EventEmitter<string>();

  constructor(private matDialog: MatDialog,
    private employeeService: EmployeeService,
    private router: Router, private atokaServ: AtokaSearchService,
    private settingService: SettingsService, private fb: FormBuilder

  ) {

  }

  ngOnInit(): void {

    // this.employeeService.getApprovalStatus().subscribe({
    //   next: status => {
    //     console.log(status.data);
    //   }

    // })



  }



  employeeDetails() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      EmployeeDetailsComponent, { data: this.details }

    );
  }

  approveRequest(details?: Employee){

    this.employeeService.updateConfirmationRequest(details?.placeOfWorkId, ApprovalStatus.APROVED )
    .subscribe({
      next: (res) => {
        if(res.responseCode == ResponseCode.Success){

          this.requestUpdate.emit(res.data)

        }
      }
    })
  }

  rejectRequest(details?: Employee){

    this.employeeService.updateConfirmationRequest(details?.placeOfWorkId, ApprovalStatus.REJECTED )
    .subscribe({
      next: (res) => {
        if(res.responseCode == ResponseCode.Success){

          this.requestUpdate.emit(res.data)

        }
      }
    })


  }
  removeEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      RemoveEmployeeComponent,
      { data: this.details },
    );
  }
  rejectEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      RejectEmployeeComponent,
      dialogConfig
    );
  }

}
