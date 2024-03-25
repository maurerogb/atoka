import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatSelectModule, ButtonComponent, MatMenuModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  constructor( private matDialog : MatDialog){

  }

  employeeDetails(){
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.maxHeight = '90vh';
    // let dialogRef = this.matDialog.open(
    //   EmployeeDetailsComponent,
    //   dialogConfig
    // );
  }
  addEmployee(){

  }
  removeEmployee(){
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.maxHeight = '90vh';
    // let dialogRef = this.matDialog.open(
    //   RemoveEmployeeComponent,
    //   dialogConfig
    // );
  }
  addBranch(){
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.maxHeight = '90vh';
    // let dialogRef = this.matDialog.open(
    //   AddBranchComponent,
    //   dialogConfig
    // );
  }
}
