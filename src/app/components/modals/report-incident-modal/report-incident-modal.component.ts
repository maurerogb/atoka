import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-report-incident-modal',
  standalone: true,
  imports: [],
  templateUrl: './report-incident-modal.component.html',
  styleUrl: './report-incident-modal.component.scss'
})
export class ReportIncidentModalComponent {

  emitToParent = new EventEmitter<any>();

 constructor(
  public dialogRef: MatDialogRef<ReportIncidentModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
 ){}

 close() {
  this.emitToParent.emit(true)
  this.dialogRef.close();
}
}
