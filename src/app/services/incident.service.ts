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

  getUserId(userId: any): any {

    localStorage.getItem('userId');
  }
  getIncidentTypes() {
    const url = `IncidentReport/IncidentType`
    return this.get<BaseResponse<any>>(url)
  }
  getIncident() {
    const url = `IncidentReport/GetUserReportedIncident`
    return this.get<BaseResponse<any>>(url)
  }

  GetAllReportedIncident() {
    const url = `IncidentReport/GetAllReportedIncident`
    return this.get<BaseResponse<any>>(url)
  }


}
