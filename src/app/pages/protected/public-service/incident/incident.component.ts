import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ButtonComponent } from '../../../../components/button/button.component';

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

  }

  onDateRangeInput(){

  }
}
