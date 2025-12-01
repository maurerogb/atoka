import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-incident',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './view-incident.component.html',
  styleUrl: './view-incident.component.scss'
})
export class ViewIncidentComponent {

  @Input() modalData: any;
  constructor(
   public dialogRef: MatDialogRef<ViewIncidentComponent>,
   @Inject(MAT_DIALOG_DATA)
   public data: any,
  ){

  }
 ngOnInit(): void{
 }
  close() {
   this.dialogRef.close();
 }
}
