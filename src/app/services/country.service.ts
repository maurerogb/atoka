import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';
import { Address } from '../model/atoka-query';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends HttpService<BaseResponse<any>>{
    url: string = 'Country/'

  constructor(private http: HttpClient) {
    super(http);
  }


  searchStreet(search:any, cityId: number ): Observable<BaseResponse<Address>>{
      this.url = `${this.url}AtokaAddressDetail/?atokaCode=${search}`;
    console.log( this.url);

    return this.get<BaseResponse<Address>>( this.url);

  }
  getDistrict(id:number ): Observable<BaseResponse<Address>>{
      this.url =`${this.url}GetLocalGovornmentByStateId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<Address>>( this.url);

  }
  getCity(id:number): Observable<BaseResponse<Address>>{
      this.url = `${this.url}GetCitiesByLGId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<Address>>( this.url);

  }
  getLga(id:number): Observable<BaseResponse<Address>>{
      this.url = `${this.url}GetLocalGovornmentByStateId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<Address>>( this.url);

  }
  getState(id:number): Observable<BaseResponse<Address>>{
      this.url = `${this.url}GetStatesByCountryId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<Address>>( this.url);

  }
  getCountry(): Observable<BaseResponse<Address>>{
      this.url = `${this.url}GetCountries`;
    console.log( this.url);

    return this.get<BaseResponse<Address>>( this.url);

  }
}
