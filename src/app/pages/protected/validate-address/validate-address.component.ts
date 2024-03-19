import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AddressFormComponent } from '../../../components/address-form/address-form.component';
import { AtokaSearchComponent } from '../../../components/atoka-search/atoka-search.component';

@Component({
    selector: 'app-validate-address',
    standalone: true,
    templateUrl: './validate-address.component.html',
    styleUrl: './validate-address.component.scss',
    imports: [CommonModule, AtokaSearchComponent, MatIconModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, AddressFormComponent]
})
export class ValidateAddressComponent {
  hideForm : boolean = false;

  constructor(){}

 showForm():boolean {
  if(this.hideForm === false){
    this.hideForm = true;

  }
  else{
    this.hideForm = false;
  }
console.log(this.hideForm );

return this.hideForm;
  }

  verifyAddress() {
throw new Error('Method not implemented.');
}

}
