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
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [MatSelectModule, ButtonComponent, MatMenuModule  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  constructor( private matDialog : MatDialog){

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
}
