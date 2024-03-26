import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReportIncidentModalComponent } from '../../../../components/modals/report-incident-modal/report-incident-modal.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../components/button/button.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ViewIncidentComponent } from '../tenant-modals/view-incident/view-incident.component';

@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [
    CommonModule, ButtonComponent,MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.scss'
})
export class IncidentComponent {

  date: any;
  filterForm!: FormGroup;
  constructor(
    private matDialog: MatDialog,
    private fb : FormBuilder
  ){

  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      start_date: '',
      end_date: '',
    });
  }



  reportIncident(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ReportIncidentModalComponent,
      dialogConfig
    );
  }

  onDateRangeInput(){

  }
  showIncident(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ViewIncidentComponent,
      dialogConfig
    );
  }
}
