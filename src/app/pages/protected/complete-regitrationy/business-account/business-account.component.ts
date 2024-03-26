import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { RouterModule } from "@angular/router";
import { AtokaSearchComponent } from "../../../../components/atoka-search/atoka-search.component";
import { AddressFormComponent } from "../../../../components/address-form/address-form.component";
import { UploadFileComponent } from "../../../../components/upload-file/upload-file.component";
import { UploadProfileImageComponent } from "../../../../components/upload-profile-image/upload-profile-image.component";

@Component({
    selector: 'app-business-account',
    standalone: true,
    templateUrl: './business-account.component.html',
    styleUrl: './business-account.component.scss',
    imports: [MatIconModule, CommonModule, ReactiveFormsModule, RouterModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, MatProgressSpinnerModule, AtokaSearchComponent, AddressFormComponent, UploadFileComponent, UploadProfileImageComponent]
})
export class BusinessAccountComponent {
uploadCAC: boolean = false;
labelName: string = "Address (Head Office)"
addressCode: string = "";
hideForm: boolean = false;
businessName: string = "";

  uploadDocument(value:boolean):void {
         this.uploadCAC= value;
  }
  showForm(){
    if (this.hideForm === false) {
      this.hideForm = true;
    }
    else {
      this.hideForm = false;
    }
    console.log(this.hideForm);
    return this.hideForm;
  }

  setHideForm(event:any){
    this.addressCode =event
  }

  setAddressCode(event:any){
    this.addressCode = event;
  }

}
