import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BaseResponse } from '../model/BaseResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends HttpService<BaseResponse<any>> {

  constructor(private http: HttpClient) {
    super(http);
  }


  getAllEmployees(userId: string) {
    const url = `PlaceOfWork/GetAll`
    return this.get<BaseResponse<any>>(url, userId)
  }
  getEmployeeDetails(userId: string, id : string){
    const url = `PlaceOfWork/GetByOccupantId/${id}`
    return this.get<BaseResponse<any>>(url, userId)
  }
}
