import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IncidentService } from '../../../../services/incident.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ButtonComponent } from '../../../../components/button/button.component';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss'
})
export class BranchComponent {
  filterForm: any;
  incidentForm: any;
  dateSelected: any;

  constructor(
    private matDialog: MatDialog,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      start_date: '',
      end_date: '',
    });

    this.incidentForm = this.fb.group({
      incidentDetails: 'string',
      atokaCode: 'string',
      isAtokaCodeKnown: true,
      longitude: 0,
      latitude: 0,
      incidentTypeId: 0,
      incidentDate: '2024-04-08T12:28:04.734Z',
      incidentPhotoVMs: [
        {
          photoId: 'string',
          photoUrl: 'string',
        },
      ],
    });


  }
  onDateRangeInput() {
    this.dateSelected = true;
    console.log(
      `${this.filterForm.value.start_date} + start`,
      `${this.filterForm.value.end_date} + end`
    );
  }

  addBranch(){
    
  }
}
