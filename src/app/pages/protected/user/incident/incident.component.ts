import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ButtonComponent } from '../../../../components/button/button.component';
import { MatDialog } from '@angular/material/dialog';

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
   
  }

  onDateRangeInput(){

  }
}
