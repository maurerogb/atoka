import { AtokaSearchService } from './../../services/atoka-search.service';
import { CommonModule } from '@angular/common';

import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddressFormComponent } from '../address-form/address-form.component';
import { Observable, Subject } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Address } from '../../model/atoka-query';

@Component({
  selector: 'app-atoka-search',
  standalone: true,
  imports: [CommonModule, AddressFormComponent, FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  templateUrl: './atoka-search.component.html',
  styleUrl: './atoka-search.component.scss'
})
export class AtokaSearchComponent implements OnInit {

  atokaSearch = new FormControl('');
  option?: Address[];
  searchInput = new Subject<string>();
  filteredOptions?: Address[];
  packages$!: Address[];
  withRefresh = false;

  @Input() addressCode: string | undefined;
@Output() returnCode : EventEmitter<string> = new EventEmitter<string>();
  constructor(private atokaServ: AtokaSearchService) { }

  ngOnInit() {
    this.atokaSearch.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value: any) => {
        this.search(value);
      })
      // this.atokaSearch.patchValue(this.addressCode?? '')
  }

ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log(this.addressCode);

  this.atokaSearch.patchValue(this.addressCode?? '')
}

  // onSearchInputChange(searchTerm: string) {
  //   this.searchInput.next(searchTerm);
  // }


  search(value: any) {
    if(value !== ''){
    this.atokaServ.searchAtoka(value).subscribe({
      next: (data: any) => {
        this.filteredOptions = data.data;
        console.log(this.option);
      }
    });
  }
  }

  setAddressCode(e: MatAutocompleteSelectedEvent){
    console.log("dfff ?? ",e.option.value);
 this.addressCode = e.option.value
    this.returnCode.emit(this.addressCode)
  }

}


