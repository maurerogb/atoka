import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PersonRequest, PersonalData } from '../model/personaldatadto';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';
import { PersonService } from './person.service';
import { loginRequest, loginResponse } from '../model/authentication';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService<BaseResponse<any>> {


  constructor(private http: HttpClient, private perspnServ: PersonService) {
    super(http);
  }

  get userId():any {
    return this.perspnServ.getUserId;
  }

  get token(){
    return this.perspnServ.getUse().title
  }

  login(user:loginRequest ): Observable<loginResponse>{
    const url = 'Auth/login';
    return this.post<loginResponse>(url, user, this.headers);

  }

  validateAddress(): Observable<BaseResponse<any>>{
    let url = 'ResidenceStartFrom/GetResidenceStart';
    return this.get<BaseResponse<any>>(url);
  }

  setLoginInfo(userData: any) : void {
    localStorage.removeItem('userData')
   localStorage.setItem('userData',JSON.stringify(userData));
  }

  createUser(user: any): Observable<BaseResponse<any>> {
    let userId = localStorage.getItem('userId');
    console.log(userId);
    user.userId = userId
    console.log(user);

    const url =    'Auth/register2'
    return this.post<BaseResponse<any>>(url, user, this.headers);
  }

   headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
    'userId': this.userId
  });
}
