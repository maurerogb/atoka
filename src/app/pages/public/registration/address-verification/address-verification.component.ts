import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-verification',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './address-verification.component.html',
  styleUrl: './address-verification.component.scss'
})
export class AddressVerificationComponent {
  showAddressForm: boolean = false;

  constructor(private router: Router) { }

  verifyAddress() {
    this.router.navigate(['register', 'account-type']);
  }
}
