import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonRequest, PersonalData } from '../model/personaldatadto';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends HttpService<PersonRequest> {

  constructor(private http: HttpClient) {
    super(http);
  }


  movedInOn(data: any): Observable<BaseResponse<any>> {
    let url = 'ResidenceStartFrom/ResidenceStarted'
    return this.post<BaseResponse<PersonRequest>>(url, data);
  }
}
