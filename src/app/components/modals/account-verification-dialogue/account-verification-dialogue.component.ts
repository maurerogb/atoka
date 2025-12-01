import { ResponseCode } from './../../../model/enums';
import { BaseResponse } from './../../../model/BaseResponse';
import { Component, Inject, Pipe } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import { NgOtpInputModule } from 'ng-otp-input';

import { VerificationOption, VerificationState } from '../../../model/enums';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../../services/person.service';
import { PersonRequest, PersonalData } from '../../../model/personaldatadto';
import { Toast, ToastrService } from 'ngx-toastr';


@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    NgOtpInputModule,
    CommonModule
  ],
  templateUrl: './account-verification-dialogue.component.html',
  styleUrl: './account-verification-dialogue.component.scss',
})
export class AccountVerificationDialogueComponent {
  states = VerificationState;
  options = VerificationOption;
  identifer?: string;
  currentState = this.states.Default;
  verificationOption = new FormControl();
  otp = new FormControl();

  message = '';

  constructor(
    public dialogRef: MatDialogRef<AccountVerificationDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private personServ: PersonService, private toastServ: ToastrService
  ) { }

  resendOTP() {

    //const pdata: any ;// this.personServ.getPerson();
    var pdata: any = localStorage.getItem('personalData')
    pdata = JSON.parse(pdata)
    console.log('pdata >>> ', pdata);

    this.identifer = (pdata.valideOption === 'Phone') ? pdata.phoneNumber : pdata.emailAddress;
    this.personServ.getGenerateOTP(this.identifer).subscribe({
      next: (responses: BaseResponse<any>) => {
        if (responses.responseCode === ResponseCode.Success) {
          this.currentState = this.states.OTP;
          this.toastServ.success(responses.description, 'Success')

        } else {
          this.currentState = this.states.Default;
          this.message = responses.description;
          this.toastServ.error(responses.description, 'Error')
        }
      }
    })
  }

  optionSelected(option: VerificationOption) {
    // pdata: any = {};// this.personServ.getPerson();
    var pdata: any = localStorage.getItem('personalData')
    pdata = <PersonalData> JSON.parse(pdata)
    console.log('pdata >>> ', pdata);

    this.verificationOption.setValue(option);

    console.log(this.verificationOption.value);
    this.identifer = (this.verificationOption.value === this.options.Phone) ? pdata.phoneNumber : pdata.emailAddress;

    this.personServ.getGenerateOTP(this.identifer).subscribe({
      next: (responses: BaseResponse<any>) => {
        if (responses.responseCode === ResponseCode.Success) {

          this.currentState = this.states.OTP;
          pdata.valideOption = this.verificationOptionLabel;

          this.toastServ.success(responses.description, 'Success')

        } else {
          this.currentState = this.states.Default;
          this.message = responses.description;
          this.toastServ.error(responses.description, 'Error')
        }
      },
      error: (err) => {

      }
    })

  }

  verifyAccount() {
    if (this.otp.value.length !== 6) {
      this.message = "Provide 6 digit token sent to you."
      return;
    }

    var pd: any = localStorage.getItem('personalData')
    pd = JSON.parse(pd)
    console.log('pdata >>> ', pd);
    // const pd: any = {};// = this.personServ.getPerson();
    pd.otp = this.otp.value;
    console.log("data before=> ", pd.otp);
    this.personServ.getOccupants(pd).subscribe((resp: any) => {

      if (resp.responseCode == ResponseCode.INVALIDTOKEN) {
        this.message = resp.description;
        this.toastServ.warning(resp.description, 'Invaliid Token')
        return;
      }

      if (resp.responseCode == ResponseCode.Success) {
        console.log("data after => ", resp);
        localStorage.setItem('userId', resp.data.userIdentifer)


        localStorage.setItem('personalData', resp.data)
         this.personServ.setPerson(resp.data);
        this.currentState = this.states.Success;

        this.toastServ.success(resp.description, 'Success')
        // this.personServ.removePerson()
      } else {
        this.message = resp.description;
        this.currentState = this.states.OTP;
        this.toastServ.success(resp.description, 'Error')
      }

    });
    this.currentState = this.states.OTP;
  }

  get verificationOptionLabel(): string {
    if (this.currentState === this.states.Default) return '';
    return (this.verificationOption.value === this.options.Phone) ? 'Phone' : 'Email';
  }




}
