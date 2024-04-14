import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-incident',
  standalone: true,
  imports: [],
  templateUrl: './view-incident.component.html',
  styleUrl: './view-incident.component.scss'
})
export class ViewIncidentComponent {


  constructor(
   public dialogRef: MatDialogRef<ViewIncidentComponent>,
   @Inject(MAT_DIALOG_DATA)
   public data: any,
  ){

    console.log(data)
  }

  close() {
   this.dialogRef.close();
 }
}
