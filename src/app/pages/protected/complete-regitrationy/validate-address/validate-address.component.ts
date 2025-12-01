import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { AddressFormComponent } from '../../../../components/address-form/address-form.component';
import { AtokaSearchComponent } from '../../../../components/atoka-search/atoka-search.component';
import { RegistrationService } from '../../../../services/registration.service';
import { MoveInDate } from '../../../../model/atoka-query';
import { PersonService } from '../../../../services/person.service';
import { loginInfo } from '../../../../model/authentication';
import { AuthenticationService } from '../../../../services/authentication.service';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProccessComletedprivatedialogComponent } from '../../../../components/modals/proccess-comletedprivatedialog/proccess-comletedprivatedialog.component';

@Component({
  selector: 'app-validate-address',
  standalone: true,
  templateUrl: './validate-address.component.html',
  styleUrl: './validate-address.component.scss',
  imports: [CommonModule, AtokaSearchComponent, MatIconModule, RouterModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, AddressFormComponent]
})
export class ValidateAddressComponent implements OnInit {

  hideForm: boolean = false;
  addressCode?: string;
  validateAddressForm!: FormGroup
  labelName: string = 'Address Code';
  currentUserData?: loginInfo;

  constructor(private regitrationServ: RegistrationService, private router: Router,
    private fb: FormBuilder, private authServ: AuthenticationService, private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCurrentUserData();
    this.validateAddressForm = this.fb.group({
      startFrom: ['', Validators.required]
    })
  }

  getCurrentUserData() {

    this.currentUserData = <loginInfo>JSON.parse(localStorage.getItem('userData') ?? "");
    console.log('currentUserData  ', this.currentUserData);

    // console.log('currentUserData  ??? ')
    // this.authServ.currentUser$.pipe(take(1)).subscribe({
    //   next: (data: loginInfo) => {
    //     this.currentUserData = data;
    //     console.log('currentUserData  ', data);

    //   }
    // })

  }

  setAddressCode(value: any) {
    this.addressCode = value
  }


  setHideForm(value: any) {
    this.addressCode = value;
    this.hideForm = false;
  }

  showForm(): boolean {
    if (this.hideForm === false) {
      this.hideForm = true;
    }
    else {
      this.hideForm = false;
    }
    console.log(this.hideForm);
    return this.hideForm;
  }

  verifyAddress() {

    const moveInDate: any = this.validateAddressForm.value;
    console.log(this.currentUserData?.hasBusinessInfo);
    this.regitrationServ.movedInOn(moveInDate).subscribe({
      next: (res) => {
        console.log("reds", res);
        if (this.currentUserData?.accountTypeId == 0) {
          this.callDalog('/app/user')
          this.router.navigate(['/app/user'])
        }
        if (this.currentUserData?.accountTypeId == 2 && this.currentUserData?.hasBusinessInfo == '1') {
          this.callDalog('/app/complete-registration/business')

        }
        if (this.currentUserData?.accountTypeId == 2 && this.currentUserData?.hasBusinessInfo == '0') {
          this.callDalog('/business-account')
        }
        if (this.currentUserData?.accountTypeId == 1) {
          this.callDalog('/app/tenant')
        }
        if (this.currentUserData?.accountTypeId == 3) {
          this.callDalog('/app/user')
        }
      }

    })
  }

  callDalog(routr: string): void {
    const dialogRef = this.dialog.open(ProccessComletedprivatedialogComponent, {
      data: 'Michael',
      width: '40%',
      position: { top: '200px', left: '30.5%', right: '0', bottom: '0' },
      hasBackdrop: true,
      backdropClass: 'backdrop',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => result && this.router.navigate([routr]));
  }



}
