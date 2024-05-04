import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputComponent } from '../../input/input.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { UploadFileComponent } from '../../upload-file/upload-file.component';
import { AtokaSearchComponent } from "../../atoka-search/atoka-search.component";
import { IncidentService } from '../../../services/incident.service';
import { ResponseCode } from '../../../model/enums';
import { AddressFormComponent } from "../../address-form/address-form.component";

@Component({
  selector: 'app-report-incident-modal',
  standalone: true,
  templateUrl: './report-incident-modal.component.html',
  styleUrl: './report-incident-modal.component.scss',
  imports: [
    CommonModule,
    InputComponent,
    MatSelectModule,
    ButtonComponent,
    UploadFileComponent,
    AtokaSearchComponent,
    AddressFormComponent
  ]
})
export class ReportIncidentModalComponent implements OnInit {

  incidentTypes: any = [];
  showDiv = false
  emitToParent = new EventEmitter<any>();

  constructor(private incidentService: IncidentService,
    public dialogRef: MatDialogRef<ReportIncidentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getIncidentTypes();
  }

  close() {
    this.emitToParent.emit(true)
    this.dialogRef.close();
  }

  getIncidentTypes() {
    this.incidentService.getIncidentTypes().subscribe(resp => {
      if (resp.responseCode == ResponseCode.Success) {

        this.incidentTypes = resp.data
        console.log(this.incidentTypes);
      }

    })
  }

  toggleDiv() {
    this.showDiv = !this.showDiv
  }


}
