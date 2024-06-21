import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ResponseCode } from '../../../model/enums';
import { AddressCardComponent } from '../../address-card/address-card.component';
import { AddressSearchComponent } from '../../address-search/address-search.component';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../../input/input.component';
import { BusinessService } from './../../../services/business.service';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  templateUrl: './add-branch.component.html',
  styleUrl: './add-branch.component.scss',
  imports: [
    CommonModule,
    InputComponent,
    ButtonComponent,
    MatCheckboxModule,
    MatSelectModule,
    AddressSearchComponent,
    AddressCardComponent,
    ReactiveFormsModule,
  ],
})
export class AddBranchComponent implements OnInit {
  showDiv = false;
  lebel = 'Branch address';
  addressResult: any;
  brachForm!: FormGroup;

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  constructor(
    public dialogRef: MatDialogRef<AddBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private businessServ: BusinessService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.brachForm = this.fb.group({
      businessInfoId: [0, Validators.required],
      residentDetailId: [0, Validators.required],
      isHQ: [false, Validators.required],
      branchName: ['', Validators.required],
      confirmOwnership: [false, Validators.required],
    });
  }

  close() {
    this.dialogRef.close();
  }

  getAddress(evt: any) {
    let userData : any =   localStorage.getItem('userData');
    userData = JSON.parse(userData)
    this.addressResult = evt;
    console.log("this.userData.BusinessId  >> ", userData.BusinessId);

    this.brachForm
      .get('residentDetailId')
      ?.patchValue(this.addressResult.residentDetailId);
    this.brachForm.get('businessInfoId')?.patchValue(userData.BusinessId);
  }

  save() {
    console.log(this.addressResult);
    let data =  this.brachForm.value;
    this.businessServ.addBusinessBranch(data).subscribe(
      res=>{
        console.log( res);

        if (res.responseCode == ResponseCode.Success) {
          // this.approvedEmployee = data.data
          console.log('allApprovedEmployee',res.data);
          this.brachForm.reset();
          this.close();
        }

      }
    )

  }
}
