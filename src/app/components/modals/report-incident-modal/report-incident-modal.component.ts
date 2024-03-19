import { Component, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputComponent } from '../../input/input.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-report-incident-modal',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    MatSelectModule,
    ButtonComponent
  ],
  templateUrl: './report-incident-modal.component.html',
  styleUrl: './report-incident-modal.component.scss'
})
export class ReportIncidentModalComponent {

  showDiv = false
  emitToParent = new EventEmitter<any>();

 constructor(
  public dialogRef: MatDialogRef<ReportIncidentModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
 ){}

 close() {
  this.emitToParent.emit(true)
  this.dialogRef.close();
}
toggleDiv(){
  this.showDiv =!this.showDiv
}


}
