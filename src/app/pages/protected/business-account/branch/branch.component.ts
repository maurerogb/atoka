import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddressSearchComponent } from '../../../../components/address-search/address-search.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { AddBranchComponent } from '../../../../components/modals/add-branch/add-branch.component';
import { BusinessService } from '../../../../services/business.service';

@Component({
  selector: 'app-branch',
  standalone: true,
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.scss',
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ButtonComponent,
    AddressSearchComponent,
  ],
})
export class BranchComponent {
  filterForm: any;
  incidentForm: any;
  dateSelected: any;
  branches: any[] = [];
  hQbranch: any = {}

  constructor(
    private businessServ: BusinessService,
    private matDialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createFilterForm();
    this.createForm();
    this.getBranches()
  }




  private createFilterForm() {
    this.filterForm = this.fb.group({
      start_date: '',
      end_date: '',
    });
  }

  private createForm() {
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

  getBranches(){
    let localData: any = localStorage.getItem('userData');
      localData = JSON.parse(localData);
      console.log("this.userData.BusinessId  >> ", localData.BusinessId);

      this.businessServ.getBusinessBranches(localData.BusinessId).subscribe(res=> {
        this.branches = res.data;
       this.hQbranch = res.data.filter(a=> a.isHQ == true)
        // console.log('hQbranch', this.hQbranch);
        this.getBranches();

      })

  }
  onDateRangeInput() {
    this.dateSelected = true;
    console.log(
      `${this.filterForm.value.start_date} + start`,
      `${this.filterForm.value.end_date} + end`
    );
  }

  addBranch() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxHeight = '98vh';
    let dialogRef = this.matDialog.open(AddBranchComponent, dialogConfig);
  }
}
