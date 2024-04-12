import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PersonRequest, PersonalData } from '../model/personaldatadto';
import { HttpService } from './http.service';
import { Observable, ReplaySubject } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';
import { PersonService } from './person.service';
import { loginInfo, loginRequest, loginResponse } from '../model/authentication';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService<BaseResponse<any>> {
  private currentUserSource = new ReplaySubject<loginInfo>(1);
    currentUser$ = this.currentUserSource;

  constructor(private http: HttpClient, private route: Router) {
    super(http);
  }

  // get userId():any {
  //   return this.perspnServ.getUserId;
  // }

  // get token(){
  //   return this.perspnServ?.getUse()?.title
  // }

  login(user:loginRequest ): Observable<loginResponse>{
    const url = 'Auth/login';
    return this.post<loginResponse>(url, user);

  }

  validateAddress(): Observable<BaseResponse<any>>{
    let url = 'ResidenceStartFrom/GetResidenceStart';
    return this.get<BaseResponse<any>>(url);
  }

  setLoginInfo(userData: any) : void {
    localStorage.removeItem('userData')
   localStorage.setItem('userData',JSON.stringify(userData));
  }
  getCurrentUser(){
   const user:loginInfo = <loginInfo>JSON.parse( localStorage.getItem('userData') ?? "");
    this.currentUserSource.next(user)

  }

  createUser(user: any): Observable<BaseResponse<any>> {
    let userId = localStorage.getItem('userId');
    console.log(userId);
    user.userId = userId
    console.log(user);

    const url =    'Auth/register2'
    return this.post<BaseResponse<any>>(url, user);
  }
logout(){
  localStorage.removeItem('userData')
this.route.navigate(['/sigin']);
}
}
