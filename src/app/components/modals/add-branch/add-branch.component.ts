import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { AddressCardComponent } from "../../address-card/address-card.component";
import { AddressSearchComponent } from "../../address-search/address-search.component";
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../../input/input.component';

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
        AddressCardComponent
    ]
})
export class AddBranchComponent {
  showDiv = false
  lebel= "Branch address"; 
  addressResult: any;
  toggleDiv(){
    this.showDiv = !this.showDiv
  }

  constructor(
    public dialogRef: MatDialogRef<AddBranchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ){}

   close() {
    this.dialogRef.close();
   }

   getAddress(evt: any){
this.addressResult = evt;

   }
   
   save(){
    console.log(this.addressResult);
    

   }

 
}
