import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';
import { PersonRequest, PersonalData } from '../model/personaldatadto';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentService extends HttpService<BaseResponse<any>> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getUserId(userId: any) : any {

    localStorage.getItem('userId');
   }

  getIncident() {
    const url = ``
  }
  // searchAtoka(search:any ): Observable<BaseResponse<Address>>{
  //   const url = `AtokaAddressDetail?atokaCode=${search}`;
  //   console.log(url);

  //   return this.get<BaseResponse<Address>>(url);

  // }

}
