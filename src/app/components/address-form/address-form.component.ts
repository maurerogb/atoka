import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { ListItem, NewStreetRequest, StreetDetails } from './../../model/atoka-query';

import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime } from 'rxjs';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-address-form',
    standalone: true,
    templateUrl: './address-form.component.html',
    styleUrl: './address-form.component.scss',
    imports: [MatIconModule, MatFormFieldModule, MatAutocompleteModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule,
       MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, ButtonComponent]
})
export class AddressFormComponent implements OnInit {

  @Output() showFormState: EventEmitter<string> = new EventEmitter<string>();

@Input() hideForm: boolean = false;
@Input() includeVerify: boolean = false;
@Input() buttonType: string = 'squared'

  streetOptions?: StreetDetails[];
  stateOptions!: ListItem[];
  cityOptions!: ListItem[];
  lgaOptions!: ListItem[];
  districtOptions!: ListItem[];
  stateSearchOptions!: ListItem[];
  countryOptions!: ListItem[];
  cityId?: number;
  newAddressCode?: string = 'LA BD2738PK';
  input!: ElementRef<HTMLInputElement>;
  countryForm!: FormGroup;
  countryId?: number;
  stateId?: number;
  lgaId?: number;
  street?: number;
  districtId?: number;
  streetId: number | undefined;

  constructor(private countryServ: CountryService, private fb: FormBuilder) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.createForm();
    this.getCountry();
    this.callStreetSearch();
    this.callStateSearch()
  }

  save() {
    const form =this.countryForm.value;
   let req: NewStreetRequest={
     cityId: this.cityId,
     countryId: this.countryId,
     streetId: this.streetId,
     streetName: form.streetName,
     stateId: this.stateId,
     houseName: form.houseName,
     lgaId:this.lgaId,
     houseNumber:form.houseNumber,

   }
   console.log(req);
   console.log(this.countryForm.value);

    this.countryServ.saveAddress(req).subscribe(res => {
      next:{
        console.log('res', res);
         this.showFormState.emit(res.data);
      }
    })
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

  callStateSearch() {
    const searchOptions= this.stateOptions;
    this.countryForm.controls['stateName'].valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value: any) => {
        console.log(value);
        this.stateSearchOptions = value=='' ? this.stateOptions :
        searchOptions?.filter(v=> v.name?.toLocaleLowerCase().includes(value.toLocaleLowerCase));
        console.log(this.stateSearchOptions);
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

  setCityId(e: MatAutocompleteSelectedEvent){
    this.cityId= this.cityOptions?.find(c => c.name ==e.option.value ?? '' )?.id
    console.log('cityid >> ', this.cityId);

  }

  setStreetId(e: MatAutocompleteSelectedEvent){
    this.streetId= this.streetOptions?.find(c => c.streetName ==e.option.value ?? '' )?.atokaAddressId
    console.log('cityid >> ', this.cityId);
  }
  getCountry() {
    this.countryServ.getCountry().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.countryOptions = resp.data;
      }
    });
  }

  getState(e: MatAutocompleteSelectedEvent) {
    const countryId= this.countryOptions?.find(c => c.name ==e.option.value ?? '' )?.id
    this.countryId=countryId;
    this.countryServ.getState(countryId ?? 0).subscribe({
      next: (resp: any) => {
        this.stateOptions = this.stateSearchOptions = resp.data;
        console.log('stateOptions',this.stateOptions);
      }
    });
  }

  getCity(e: MatAutocompleteSelectedEvent) {
    const id= this.lgaOptions?.find(c => c.name ==e.option.value ?? '' )?.id
    this.lgaId = id;
    this.countryServ.getCity(id).subscribe({
      next: (data: any) => {
        this.cityOptions = data.data;
      }
    });
  }

  getLga(e: MatAutocompleteSelectedEvent) {

    const id= this.stateOptions?.find(c => c.name ==e.option.value ?? '' )?.id
    this.stateId = id;
    this.countryServ.getLga(id).subscribe({
      next: (data: any) => {
        this.lgaOptions = data.data;
console.log(this.lgaOptions);

      }
    });
  }

  getDistrict(value: any) {
    this.countryServ.getDistrict(value).subscribe({
      next: (data: any) => {
        this.districtOptions = data.data;
      }
    });
  }



}
