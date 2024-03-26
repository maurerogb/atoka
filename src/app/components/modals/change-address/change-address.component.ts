import { Component, Inject } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import { ButtonComponent } from '../../button/button.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-address',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    MatSelectModule,
    CommonModule
  ],
  templateUrl: './change-address.component.html',
  styleUrl: './change-address.component.scss'
})
export class ChangeAddressComponent {

  showDiv = false

  toggleDiv(){
    this.showDiv = !this.showDiv
  }

  constructor(
  public dialogRef: MatDialogRef<ChangeAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ){}

   close() {
    this.dialogRef.close();
   }
}
