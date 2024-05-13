import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../../../services/employee.service';
import { ResponseCode } from '../../../../../model/enums';
import { Employee } from '../../../../../model/businessInfo';
import { RemoveEmployeeComponent } from '../../../../../components/modals/remove-employee/remove-employee.component';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule, CommonModule,
    ReactiveFormsModule,
    ButtonComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
filterForm?: FormGroup<any>;
employees:  Employee[] = [];
  matDialog: any;
  details: any;
  reasonForDelete: any;

constructor(private route: Router,
  private employeeService: EmployeeService,) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllAppprovedEmployees();
  }

goback() {
   this.route.navigate(['/app/business-account/employees'])
}

getAllAppprovedEmployees(): void {
  this.employeeService.GetAllApprovedColleagues("").subscribe(data => {
    if (data.responseCode == ResponseCode.Success) {
      this.employees = data.data
      console.log('allApprovedEmployee',data.data);

    }
  })
}

viewDetails(){
  console.log("testing view");

}

deleteEmployee(){
  // const dialogConfig = new MatDialogConfig();
  // dialogConfig.maxHeight = '90vh';
  // let dialogRef = this.matDialog.open(
  //   RemoveEmployeeComponent,
  //   dialogConfig
  // );
console.log("testing");

  // dialogRef.afterClosed().subscribe((result: any) => {
  //   this.reasonForDelete = result;
  //   console.log(result);
  //   this.deleteEmployee();
  // })
}
onDateRangeInput() {
throw new Error('Method not implemented.');
}
addBranch() {
throw new Error('Method not implemented.');
}

}
