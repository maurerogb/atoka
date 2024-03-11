
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Regex, ResponseCode } from '../../../../model/enums';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PersonalData } from '../../../../model/personaldatadto';
import { PersonService } from '../../../../services/person.service';
import { AuthenticationService } from '../../../../services/authentication.service';
import { userRequest } from '../../../../model/authentication';

@Component({
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, CommonModule],
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.scss'
})
export class CreatePasswordComponent implements OnInit {
  regex = Regex;
  specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  hidePassword = false;
  hideConfirmPassword = false;
  registrationFrom!: FormGroup
  personalDetails: PersonalData = {};

  constructor(private router: Router, private fb: FormBuilder, private personService: PersonService, private authService :AuthenticationService) { }
message: string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.personalDetails = this.personService.getUse();
    this.createForm();


  }

  createForm() {
    this.registrationFrom = this.fb.group({
      userName: [this.personalDetails.emailAddress],
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, [Validators.required]),
    })
  }
  createPassword() {
    let formData = this.registrationFrom.value;
    let data: userRequest = {
      userName: formData.userName,
      password: formData.password,
      userId: ''
    }
    this.authService.createUser(data).subscribe(res => {
      console.log('authService',res);
      if(res.responseCode === ResponseCode.Success){
        this.router.navigate(['register', 'profile-picture']);
      }else{
        this.message = res.description;
      }
    })
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password?.value === confirmPassword?.value ? null : { notmatched: true };
  };
}


