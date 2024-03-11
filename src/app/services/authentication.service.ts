import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PersonRequest, PersonalData } from '../model/personaldatadto';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { BaseResponse } from '../model/BaseResponse';
import { PersonService } from './person.service';


const testMode = true;
const remoteUrl = 'http://dstatoka-001-site7.htempurl.com/api/'
const localUrl = 'https://localhost:5001/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService<BaseResponse<any>> {
  baseUrl = '';

  constructor(private http: HttpClient, private perspnServ: PersonService) {
    super(http);
  }

  get userId():any {
    return this.perspnServ.getUserId;
  }

  get token(){
    return this.perspnServ.getUse().title
  }

  createUser(user: any): Observable<BaseResponse<any>> {
    let userId = localStorage.getItem('userId');
    console.log(userId);
    user.userId = userId
    console.log(user);

    this.baseUrl = testMode ? localUrl : remoteUrl;
    const url =   this.baseUrl+'Auth/register2'
    return this.post<BaseResponse<any>>(url, user, this.headers);
  }

   headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
    'userId': this.userId
  });
}
