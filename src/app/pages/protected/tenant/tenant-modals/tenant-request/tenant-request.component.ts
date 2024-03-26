import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputComponent } from '../../../../../components/input/input.component';
import { ButtonComponent } from '../../../../../components/button/button.component';

@Component({
  selector: 'app-tenant-request',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent
  ],
  templateUrl: './tenant-request.component.html',
  styleUrl: './tenant-request.component.scss'
})
export class TenantRequestComponent {
  constructor(
    public dialogRef: MatDialogRef<TenantRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ){}

   close() {
    this.dialogRef.close();
  }

}
