import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CountryService } from '../../services/country.service';
import { ListItem } from '../../model/atoka-query';
import { debounceTime } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatAutocompleteModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatDatepickerModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent implements OnInit {

  @Output() showFormState: EventEmitter<string> = new EventEmitter<string>();

  @Input() hideForm: boolean = false;
  streetOptions?: ListItem[];
  cityId?: number;
  newAddressCode?: string = 'LA BD2738PK';

  countryForm!: FormGroup;

  constructor(private countryServ: CountryService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.createForm();
    this.callStreetSearch();
  }

  show() {

    console.log(this.countryForm.value);


    this.showFormState.emit(this.newAddressCode);
  }

  createForm() {
    this.countryForm = this.fb.group({
      countryName: ['', Validators.required],
      stateName: ['', Validators.required],
      lgaName: ['', Validators.required],
      cityName: ['', Validators.required],
      districtName: ['', Validators.required],
      streetName: ['', Validators.required],
      houseNumber: ['', Validators.required],
      houseName: ['', Validators.required]
    })
  }

  callStreetSearch() {
    this.countryForm.controls['streetName'].valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value: any) => {
        this.searchStreet(value);
console.log(value);

      });
  }


  searchStreet(value: any) {
    this.countryServ.searchStreet(value, this.cityId ?? 0).subscribe({
      next: (data: any) => {
        this.streetOptions = data.data;
        // console.log(this.option);
      }
    });
  }

  // search(value: any) {
  //   this.countryServ.searchAtoka(value).subscribe({
  //     next: (data: any) => {
  //       this.filteredOptions = data.data;
  //       console.log(this.option);
  //     }
  //   });
  // }

  // search(value: any) {
  //   this.countryServ.searchAtoka(value).subscribe({
  //     next: (data: any) => {
  //       this.filteredOptions = data.data;
  //       console.log(this.option);
  //     }
  //   });
  // }

  // search(value: any) {
  //   this.countryServ.searchAtoka(value).subscribe({
  //     next: (data: any) => {
  //       this.filteredOptions = data.data;
  //       console.log(this.option);
  //     }
  //   });
  // }

  // search(value: any) {
  //   this.countryServ.searchAtoka(value).subscribe({
  //     next: (data: any) => {
  //       this.filteredOptions = data.data;
  //       console.log(this.option);
  //     }
  //   });
  // }

  // search(value: any) {
  //   this.countryServ.searchAtoka(value).subscribe({
  //     next: (data: any) => {
  //       this.filteredOptions = data.data;
  //       console.log(this.option);
  //     }
  //   });
  // }



}
