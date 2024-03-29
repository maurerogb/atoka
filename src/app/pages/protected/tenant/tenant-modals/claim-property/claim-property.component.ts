import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from '../../../../../components/button/button.component';
import { InputComponent } from '../../../../../components/input/input.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadFileComponent } from '../../../../../components/upload-file/upload-file.component';

@Component({
  selector: 'app-claim-property',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    MatCheckboxModule,
    MatSelectModule,
    CommonModule,
    UploadFileComponent,
    MatCheckboxModule
  ],
  templateUrl: './claim-property.component.html',
  styleUrl: './claim-property.component.scss'
})
export class ClaimPropertyComponent {

  showDiv = false

  toggleDiv(){
    this.showDiv = !this.showDiv
  }

  constructor(
    public dialogRef: MatDialogRef<ClaimPropertyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ){}

   close() {
    this.dialogRef.close();
  }
}
