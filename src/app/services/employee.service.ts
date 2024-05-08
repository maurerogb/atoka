import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseResponse } from '../model/BaseResponse';
import { HttpClient } from '@angular/common/http';
import { ApprovalStatus } from '../model/businessInfo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends HttpService<BaseResponse<any>> {

  constructor(private http: HttpClient) {
    super(http);
  }


  getApprovalStatus() {
    const url = `PlaceOfWork/GetConfirmStatusTypes`
    return this.get<BaseResponse<any>>(url)
  }


  updateConfirmationRequest(id: any, status: ApprovalStatus) {
    const url = `PlaceOfWork/EmployerDecission/${status}/pow/${id}`
    return this.put<BaseResponse<any>>(url)
  }


  getAllEmployees(userId: string) {
    const url = `PlaceOfWork/GetAll`
    return this.get<BaseResponse<any>>(url, userId)
  }
  GetAllNotApprovedColleagues(userId: string) {
    const url = `PlaceOfWork/GetAllNotApprovedColleagues`
    return this.get<BaseResponse<any>>(url, userId)
  }
  GetAllApprovedColleagues(userId: string) {
    const url = `PlaceOfWork/GetAllApprovedColleagues`
    return this.get<BaseResponse<any>>(url, userId)
  }
  GetAllByBusinesses(userId: string) {
    const url = `PlaceOfWork/GetAllByBusiness`
    return this.get<BaseResponse<any>>(url, userId)
  }
  getEmployeeDetails(userId: string, id: string) {
    const url = `PlaceOfWork/GetByOccupantId/${id}`
    return this.get<BaseResponse<any>>(url, userId)
  }
}
