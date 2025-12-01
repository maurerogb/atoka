import { HttpClient } from "@angular/common/http";
import { BaseResponse } from "../model/BaseResponse";
import { HttpService } from "./http.service";
import {  BusinessInfoRequest } from "../model/businessInfo";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ListItem } from "../model/atoka-query";



@Injectable({
  providedIn: 'root'
})
export class BusinessService  extends HttpService<BaseResponse<any>>{

  constructor(private http:HttpClient){
    super(http);
  }

  getBusinessTypes( ): Observable<BaseResponse<ListItem[]>>{
    const url = 'Business/BusinessTypes';
    return this.get(url);
  }


  getBusinessRoles(): Observable<BaseResponse<ListItem[]>>{
    const url = 'Business/BusinessRoles';
    return this.get(url, );
  }

  addBusiness(user:any ): Observable<BaseResponse<any>>{
    const url = 'Business';
    return this.filePost(url, user);
  }

}
