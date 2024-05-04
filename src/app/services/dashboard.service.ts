import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../model/BaseResponse';
import { HttpService } from './http.service';
import { SecureVisitAddress } from '../model/secure-visit';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends HttpService<BaseResponse<any>> {


  constructor(private http: HttpClient) {
    super(http);
  }


  getRecentVisit(userId: string) {
    const url = `secureVisit`
    return this.get<BaseResponse<SecureVisitAddress>>(url, userId)
  }



}
