import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-change-employment-status',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './change-employment-status.component.html',
  styleUrl: './change-employment-status.component.scss'
})
export class ChangeEmploymentStatusComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangeEmploymentStatusComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
     ){}

     close() {
      this.dialogRef.close();
     }
}
