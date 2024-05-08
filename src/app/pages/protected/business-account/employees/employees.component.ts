import { ResponseCode } from './../../../../model/enums';
import { EmployeeService } from './../../../../services/employee.service';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../components/button/button.component';
import { MatMenuModule } from '@angular/material/menu'
import { EmployeeDetailsComponent } from '../../../../components/modals/employee-details/employee-details.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmployeeModalComponent } from '../../../../components/modals/add-employee-modal/add-employee-modal.component';
import { RemoveEmployeeComponent } from '../../../../components/modals/remove-employee/remove-employee.component';
import { AddBranchComponent } from '../../../../components/modals/add-branch/add-branch.component';
import { RejectEmployeeComponent } from '../../../../components/modals/reject-employee/reject-employee.component';
// import { EmployeeService } from '../../../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { SettingsService } from '../../../../services/settings.service';
import { AddressCardComponent } from "../../../../components/address-card/address-card.component";
import { AtokaSearchComponent } from "../../../../components/atoka-search/atoka-search.component";
import { AtokaSearchService } from '../../../../services/atoka-search.service';
import { Address } from '../../../../model/atoka-query';
import { RequestCardComponent } from "../../../../components/request-card/request-card.component";
import { Employee } from '../../../../model/businessInfo';
@Component({
    selector: 'app-employees',
    standalone: true,
    templateUrl: './employees.component.html',
    styleUrl: './employees.component.scss',
    imports: [MatSelectModule, ButtonComponent, MatMenuModule, CommonModule, AddressCardComponent, AtokaSearchComponent, RequestCardComponent]
})
export class EmployeesComponent {

  userId: any
  selected = false;
  employees: any;
  seeMore = false;
  details: any;
  approvedEmployee:  Employee[] = [];
  pendingEmployee:  Employee[] = [];
  allByBusiness: any;
  addressInfo?: Address;


  constructor(private matDialog: MatDialog,
    private employeeService: EmployeeService,
    private router: Router, private atokaServ: AtokaSearchService,
    private settingService: SettingsService

  ) {

  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    // this.getUserDetails();
    this.getallNotAppprovedEmployees();
    this.getAllAppprovedEmployees();
  }

  refreshCards(){
    this.getallNotAppprovedEmployees();
    this.getAllAppprovedEmployees();
  }

  getAddress(value: Address) {
    this.addressInfo = value;
  }

  getAllAppprovedEmployees(): void {
    this.employeeService.GetAllApprovedColleagues("").subscribe(data => {
      if (data.responseCode == ResponseCode.Success) {
        this.approvedEmployee = data.data
        console.log('allApprovedEmployee',data.data);

      }
    })
  }

  getallNotAppprovedEmployees(): void {
    this.employeeService.GetAllNotApprovedColleagues("").subscribe(data => {
      if (data.responseCode == ResponseCode.Success) {
        this.pendingEmployee = data.data
        console.log('getallNotAppprovedEmployees', data.data);
      }
    })
  }

  getAllByBusiness(): void {
    this.employeeService.GetAllByBusinesses("").subscribe(data => {
      if (data.responseCode == ResponseCode.Success) {
        this.allByBusiness = data.data
      }
    })
  }

  selectedAddress() {
    this.selected = !this.selected
  }
  employeeDetails() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      EmployeeDetailsComponent,
      dialogConfig
    );
  }
  addEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      AddEmployeeModalComponent,
      dialogConfig
    );
  }
  removeEmployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      RemoveEmployeeComponent,
      dialogConfig
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
  addBranch() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      AddBranchComponent,
      dialogConfig
    );
  }

  // getAllEmployees() {
  //   this.employeeService.getAllEmployees(this.userId).subscribe((res: any) => {
  //     if (this.seeMore) {
  //       this.employees = res.data
  //     } else {
  //       this.employees = res.data.slice(0, 4);
  //     }
  //   })
  // }

  getUserDetails() {
    this.settingService.getUserDetails(this.userId).subscribe((res: any) => {
      this.details = res.data
    })
  }

  goToEmployeeList() {
    this.router.navigateByUrl('/app/business-account/employee-list')
  }


}
