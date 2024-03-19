import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { InputComponent } from '../../input/input.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-add-employee-modal',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './add-employee-modal.component.html',
  styleUrl: './add-employee-modal.component.scss'
})
export class AddEmployeeModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEmployeeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ){}

   close() {
    this.dialogRef.close();
   }
}
