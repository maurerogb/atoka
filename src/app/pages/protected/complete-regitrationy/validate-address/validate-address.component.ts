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
  labelName: string ='Address Code'

  constructor(private regitrationServ: RegistrationService, private router: Router, private fb: FormBuilder, private personServ: PersonService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.validateAddressForm = this.fb.group({
      startFrom:['',Validators.required]
    })
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

    const moveInDate: any =   this.validateAddressForm.value;


     console.log(moveInDate);


    this.regitrationServ.movedInOn(moveInDate).subscribe({
      next: (res) => {
        console.log("reds", res);
      if(  this.personServ.getPerson().accountTypeId == 2){
        this.router.navigate(['/business-registration'])
      }
      if(  this.personServ.getPerson().accountTypeId == 2 && false){
        this.router.navigate(['/business-registration'])
      }
      if(  this.personServ.getPerson().accountTypeId == 1){
        this.router.navigate(['/tenant'])
      }
      if(  this.personServ.getPerson().accountTypeId == 3){
        this.router.navigate(['/user'])
      }
      }
    })

  }

}
