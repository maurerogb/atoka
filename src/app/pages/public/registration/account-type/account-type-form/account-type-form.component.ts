import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './account-type-form.component.html',
  styleUrl: './account-type-form.component.scss'
})
export class AccountTypeFormComponent {
  showAddressForm: boolean = false;
  isCAC: boolean = false;

  constructor(private router: Router) { }

  submitAccountType() {
    this.router.navigate(['register', 'profile-picture']);
  }
}
