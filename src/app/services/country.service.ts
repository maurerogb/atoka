import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';
import { Address, ListItem, NewStreetRequest, StreetDetails } from '../model/atoka-query';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends HttpService<BaseResponse<any>>{
    url: string = ''

  constructor(private http: HttpClient) {
    super(http);
  }


  searchStreet(search:any, cityId: number ): Observable<BaseResponse<StreetDetails>>{
      this.url = `AtokaAddressDetail/SearchAtoka?cityId=${cityId}&address=${search}`;
    console.log( this.url);
    return this.get<BaseResponse<StreetDetails>>( this.url);

  }
  getDistrict(id:number ): Observable<BaseResponse<ListItem>>{
      this.url =`Country/GetLocalGovornmentByStateId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<ListItem>>( this.url);

  }
  getCity(id?:number): Observable<BaseResponse<ListItem>>{
      this.url = `Country/GetCitiesByLGId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<ListItem>>( this.url);

  }
  getLga(id?:number): Observable<BaseResponse<ListItem>>{
      this.url = `Country/GetLocalGovornmentByStateId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<ListItem>>( this.url);

  }
  getState(id:number): Observable<BaseResponse<ListItem>>{
      this.url = `Country/GetStatesByCountryId/${id}`;
    console.log( this.url);

    return this.get<BaseResponse<ListItem>>( this.url);

  }
  getCountry(): Observable<BaseResponse<ListItem>>{
      this.url = `Country/GetCountries`;
    console.log( this.url);
    return this.get<BaseResponse<ListItem>>( this.url);
  }
  saveAddress(request: NewStreetRequest): Observable<BaseResponse<any>>{
    this.url = `ResidentDetail/SaveAddress`;
  console.log( this.url);
  return this.post<BaseResponse<any>>( this.url, request);
}
}
