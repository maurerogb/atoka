import { Component, Inject } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import { ButtonComponent } from '../../button/button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './add-branch.component.html',
  styleUrl: './add-branch.component.scss'
})
export class AddBranchComponent {
  showDiv = false

  toggleDiv(){
    this.showDiv = !this.showDiv
  }

  constructor(
    public dialogRef: MatDialogRef<AddBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ){}

   close() {
    this.dialogRef.close();
   }
}
