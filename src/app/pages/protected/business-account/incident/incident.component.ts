import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { ReportIncidentModalComponent } from '../../../../components/modals/report-incident-modal/report-incident-modal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ViewIncidentComponent } from '../../../../components/modals/view-incident/view-incident.component';
@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.scss'
})
export class IncidentComponent {
  filterForm!: FormGroup;
  date: any;

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
