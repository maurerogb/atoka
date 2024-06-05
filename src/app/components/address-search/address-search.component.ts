import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressFormComponent } from "../address-form/address-form.component";
import { AtokaSearchComponent } from "../atoka-search/atoka-search.component";

@Component({
    selector: 'app-address-search',
    standalone: true,
    templateUrl: './address-search.component.html',
    styleUrl: './address-search.component.scss',
    imports: [AddressFormComponent, AtokaSearchComponent]
})
export class AddressSearchComponent {
  showform: boolean = false;
  @Input() lebel?: string;
  @Input() includeVerify: boolean= false;  
  @Input() buttonType: boolean= false;
  @Output() result: EventEmitter<any> = new EventEmitter<any>(); 


  getResult(evt: any){    
    this.result .emit(evt)
    }

  }
