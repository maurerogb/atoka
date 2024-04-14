import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../components/button/button.component';
import {MatMenuModule} from '@angular/material/menu'
import { EmployeeDetailsComponent } from '../../../../components/modals/employee-details/employee-details.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmployeeModalComponent } from '../../../../components/modals/add-employee-modal/add-employee-modal.component';
import { RemoveEmployeeComponent } from '../../../../components/modals/remove-employee/remove-employee.component';
import { AddBranchComponent } from '../../../../components/modals/add-branch/add-branch.component';
import { RejectEmployeeComponent } from '../../../../components/modals/reject-employee/reject-employee.component';
import { EmployeeService } from '../../../../services/employee.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [MatSelectModule, ButtonComponent, MatMenuModule, CommonModule  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  userId : any
  selected = false;
  employees : any;
  seeMore = false

  constructor( private matDialog : MatDialog,
  private employeeService : EmployeeService,
  private router : Router

    ){

  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getAllEmployees();
  }


  selectedAddress(){
    this.selected = !this.selected
  }
  employeeDetails(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      EmployeeDetailsComponent,
      dialogConfig
    );
  }
  addEmployee(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      AddEmployeeModalComponent,
      dialogConfig
    );
  }
  removeEmployee(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      RemoveEmployeeComponent,
      dialogConfig
    );
  }
  rejectEmployee(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      RejectEmployeeComponent,
      dialogConfig
    );
  }
  addBranch(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      AddBranchComponent,
      dialogConfig
    );
  }

   getAllEmployees(){
    this.employeeService.getAllEmployees(this.userId).subscribe((res:any)=>{
     if(this.seeMore){
      this.employees = res.data
     } else {
      this.employees = res.data.slice(0, 4);
     }
    })
  }

  goToEmployeeList(){
    this.router.navigateByUrl('/app/business-account/employee-list')
  }


}
