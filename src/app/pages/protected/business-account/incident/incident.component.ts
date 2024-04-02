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
import { IncidentService } from '../../../../services/incident.service';
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
  data:any;
  userId!: any
  dateSelected: boolean = false;

  constructor(
    private matDialog: MatDialog,
    private fb : FormBuilder,
    private incidentService : IncidentService
  ){

  }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      start_date: '',
      end_date: '',
    });
    console.log(this.filterForm.value.start_date)

    this.getAllIncident();
    this.userId = localStorage.getItem('userId');
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
    this.dateSelected = true;
    console.log(`${this.filterForm.value.start_date} + start`, `${this.filterForm.value.end_date} + end`)
  }

  showIncident(item: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '90vh';
    let dialogRef = this.matDialog.open(
      ViewIncidentComponent,
      dialogConfig.data = item,
      );
      console.log(dialogConfig.data)
  }



  getAllIncident(){
    this.incidentService.getIncident( this.userId).subscribe((res:any)=>{
      this.data = res.data
    })
  }
}
