import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { Router, RouterModule } from "@angular/router";
import { AtokaSearchComponent } from "../../../../components/atoka-search/atoka-search.component";
import { AddressFormComponent } from "../../../../components/address-form/address-form.component";
import { UploadFileComponent } from "../../../../components/upload-file/upload-file.component";
import { UploadProfileImageComponent } from "../../../../components/upload-profile-image/upload-profile-image.component";
import { BusinessInfoRequest } from "../../../../model/businessInfo";
import { BusinessService } from "../../../../services/business.service";
import { ResponseCode } from "../../../../model/enums";
import { PersonService } from "../../../../services/person.service";
import { ListItem } from "../../../../model/atoka-query";
import { ToastrService } from "ngx-toastr";
import { BaseResponse } from "../../../../model/BaseResponse";
import { LoaderComponent } from "../../../../components/loader/loader.component";


@Component({
  selector: 'app-business-account',
  standalone: true,
  templateUrl: './business-account.component.html',
  styleUrl: './business-account.component.scss',
  imports: [MatIconModule, CommonModule, ReactiveFormsModule,
    RouterModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule,
     MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule,
      MatDatepickerModule, MatProgressSpinnerModule, AtokaSearchComponent,
       AddressFormComponent, UploadFileComponent, UploadProfileImageComponent, LoaderComponent]
})
export class BusinessAccountComponent implements OnInit {
  uploadCAC: boolean = false;
  labelName: string = "Address (Head Office)"
  addressCode: string = "";
  hideForm: boolean = false;
  businessName: string = "";
  businessForm!: FormGroup;
  cacDocument: File | undefined
  businessLogo: File | undefined
  businessTypes!: ListItem[];
  businessRoles?: ListItem[]
  constructor(private fb: FormBuilder, private toast:ToastrService, private businessServ: BusinessService, private route: Router, private user: PersonService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.createBusinessForm();
    this.getBusinessRoles();
    this.getBusinessType();
  }
  getBusinessType() {
    this.businessServ.getBusinessTypes().subscribe({
      next: (resp:BaseResponse<any>) => {
        if(resp.responseCode === ResponseCode.Success){
            this.businessTypes = resp.data;
            this.toast.success(resp.description, 'Success', {closeButton:true});
        }

      }
    });
  }

  getBusinessRoles() {
    this.businessServ.getBusinessRoles().subscribe({
      next: (resp) => {
        this.businessRoles = resp.data;
      }
    });
  }
  saveBusinessInfo() {
    const busi = this.businessForm.value
    console.log('busi', busi);

    let formdata = new FormData();

    formdata.append('businessLogFile', this.businessLogo ?? '')
    formdata.append('cacDocFile', this.cacDocument ?? '')

    // let data:any ={
    //    acceptTM : busi.hasAcceptedTC,
    //    cacDocFile:'',
    //    roleInBusinessId: busi.roleInBusiness,
    //     atokaCode: busi.businessAddress,
    //     businessLogFile: '',
    //     businessName:busi.businessName,
    //     businessTypeId: 1, // busi.businessType,
    //     isBusinessRegistered:busi.isBusinessReg,
    //     officialEmail:busi.businessEmail,
    //     officialPhone:busi.phoneNo,
    //     regNumber:busi.businessRegNo,
    // }

    formdata.append('acceptTM', busi.hasAcceptedTC);
    formdata.append('cacDocFile', '');
    formdata.append('roleInBusinessId', busi.roleInBusiness);
    formdata.append('atokaCode', busi.businessAddress);
    formdata.append('businessLogFile', '');
    formdata.append('businessName', busi.businessName);
    formdata.append('businessTypeId', '1');//busi.businessType);
    formdata.append('isBusinessRegistered', busi.isBusinessReg);
    formdata.append('officialEmail', busi.businessEmail);
    formdata.append('officialPhone', busi.phoneNo);
    formdata.append('regNumber', busi.businessRegNo);

    this.businessServ.addBusiness(formdata).subscribe({
      next: res => {
        console.log(res);

        if (res.responseCode == ResponseCode.Success) {
          this.toast.success( res.description, 'Success');
          // if (this.user.getPerson().accountTypeId == 2) {
          //   console.log(this.user.getPerson().accountTypeId );
          //   this.route.navigate(['/business-account'])
          // }


          // if (this.user.getPerson().accountTypeId == 1) {
          //   console.log(this.user.getPerson().accountTypeId );
          //   this.route.navigate(['/business-account'])
          // }
        }

      }

    })

    //  console.log('businessForm', data );

  }

  uploadDocument(value: boolean): void {
    if (value) {
      console.log('value', value);
      this.businessForm.get('businessRegNo')?.addValidators(Validators.required)
    } else {
      this.businessForm.get('businessRegNo')?.removeValidators
    }
    this.uploadCAC = value;

  }
  showForm() {
    if (this.hideForm === false) {
      this.hideForm = true;
    }
    else {
      this.hideForm = false;
    }
    console.log(this.hideForm);
    return this.hideForm;
  }

  setHideForm(event: any) {
    this.addressCode = event
  }

  setCACocument(event: File) {
    console.log(event.size);
    this.cacDocument = event;
  }

  setBusinessLogo(event: File) {
    console.log(event.size);
    this.businessLogo = event;
  }

  setAddressCode(event: any) {
    this.businessForm.get('businessAddress')?.patchValue(event);
  }

  createBusinessForm() {
    this.businessForm = this.fb.group({
      businessName: ['', Validators.required],
      businessType: ['', Validators.required],
      phoneNo: ['', Validators.required],
      businessEmail: ['', Validators.required],
      isBusinessReg: [false, Validators.required],
      roleInBusiness: ['', Validators.required],
      businessAddress: ['', Validators.required],
      businessRegNo: [''],
      hasAcceptedTC: [false, Validators.required],
    });
  }

}
