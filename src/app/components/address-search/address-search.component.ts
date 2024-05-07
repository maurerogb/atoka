import { Component } from '@angular/core';
import { AddressFormComponent } from "../address-form/address-form.component";

@Component({
  selector: 'app-address-search',
  standalone: true,
  templateUrl: './address-search.component.html',
  styleUrl: './address-search.component.scss',
  imports: [AddressFormComponent]
})
export class AddressSearchComponent {
  showform: boolean = false;

}
