import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputComponent } from '../../input/input.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ){}

   close() {
    this.dialogRef.close();
   }
}
