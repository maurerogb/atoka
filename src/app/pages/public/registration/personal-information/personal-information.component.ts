import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { AccountVerificationDialogueComponent } from '../../../../components/modals/account-verification-dialogue/account-verification-dialogue.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonRequest } from '../../../../model/personaldatadto';

@Component({
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent implements OnInit {
[x: string]: any;
  personalDetailsfrom!: FormGroup;

  constructor(private dialog: MatDialog, private router: Router,private fb:FormBuilder) { }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.createForm();
}

login(){
  this.router.navigate(['/signin']);
}


  register(): void {
    const formdata = this.personalDetailsfrom.value;
console.log(formdata);

    let pd: PersonRequest ={
        firstName :formdata.firstName,
        surname :formdata.lastName,
        acceptedPolicy : formdata.acceptTM,
        dateOfBirth:formdata.dob,
        gender: formdata.gender === 1 ? "Male" : "Female",
        middleName:formdata.middleName,
        phoneNumber: formdata.phoneNumber,
        accountTypeId: formdata.accountType,
        emailAddress: formdata.emailAddress,
        iownAproperty: false,
        title:''
    };

    localStorage.setItem('personalData', JSON.stringify(pd));
    this.verifyUser();
  }

  verifyUser(): void {
    const dialogRef = this.dialog.open(AccountVerificationDialogueComponent, {
      data: 'Michael',
      width: '40%',
      position: {top: '200px', left: '30.5%', right: '0', bottom: '0'},
      hasBackdrop: true,
      backdropClass: 'backdrop',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => result && this.router.navigate(['register', 'create-password']));
  }

  createForm(){
    this.personalDetailsfrom = this.fb.group({
      firstName: ['',[ Validators.required]],
      lastName: ['',[ Validators.required]],
      middleName: ['',[ Validators.required]],
      emailAddress: ['',[ Validators.required]],
      dob: ['',[ Validators.required]],
      phoneNumber: ['',[ Validators.required]],
      gender: ['', [Validators.required]],
      accountType: ['', [Validators.required]],
      acceptTM:[Boolean]
    })
  }


}
