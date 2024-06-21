import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';
import { ListItem } from '../model/atoka-query';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessService extends HttpService<BaseResponse<any>> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getBusinessTypes(): Observable<BaseResponse<ListItem[]>> {
    const url = 'Business/BusinessTypes';
    return this.get(url);
  }

  getBusinessRoles(): Observable<BaseResponse<ListItem[]>> {
    const url = 'Business/BusinessRoles';
    return this.get(url);
  }

  addBusiness(user: any): Observable<BaseResponse<any>> {
    const url = 'Business';
    return this.filePost(url, user);
  }

  addBusinessBranch(user: any): Observable<BaseResponse<any>> {
    const url = 'Business/addBusinessBranch';
    return this.filePost(url, user);
  }

  getBusinessBranches(
    businessId: number
  ): Observable<BaseResponse<any[]>> {
    const url = 'Business/GetBusinessBranches/' + businessId;
    return this.get(url);
  }
}
