import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputComponent } from '../../input/input.component';
import { Employee } from '../../../model/businessInfo';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReadOnlyComponent } from "../../read-only/read-only.component";
import { PersonComponent } from "../../person/person.component";
import { ApprovalStatus } from '../../../model/enums';

@Component({
    selector: 'app-employee-details',
    standalone: true,
    templateUrl: './employee-details.component.html',
    styleUrl: './employee-details.component.scss',
    imports: [
        InputComponent, ReactiveFormsModule, CommonModule,
        ReadOnlyComponent,
        PersonComponent
    ]
})
export class EmployeeDetailsComponent {
  status= ApprovalStatus
  constructor(
    public dialogRef: MatDialogRef<EmployeeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
   ){
    console.log(data);

   }

   close() {
    this.dialogRef.close();

   }
}
