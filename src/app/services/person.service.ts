import { BaseResponse } from './../model/BaseResponse';
import { Injectable } from '@angular/core';
import { PersonalData, PersonRequest } from './../model/personaldatadto';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';


const testMode = true;
const remoteUrl =  'http://dstatoka-001-site7.htempurl.com/api/'
const localUrl ='https://localhost:5001/api/';
@Injectable({
  providedIn: 'root'
})

export class PersonService extends HttpService<PersonRequest> {
    baseUrl = '';
  constructor(private http: HttpClient) {
    super(http);
  }

  getOccupants(person: PersonRequest): Observable<BaseResponse<PersonalData>> {
    this.baseUrl = testMode ? localUrl : remoteUrl;
    const url = this.baseUrl+'OccupantDetails/Create-User-Profile'
    return this.http.post<BaseResponse<PersonRequest>>(url, person);
  }
  getGenerateOTP(identifer: any): Observable<BaseResponse<any>> {
     this.baseUrl = testMode ? localUrl : remoteUrl;
    const url = this.baseUrl+`ValidateOTP/Generate-OTP-Identifer/${identifer}`
    return this.http.get<BaseResponse<PersonRequest>>(url);
  }


 getPerson() : PersonRequest {
  return <PersonRequest> JSON.parse( localStorage.getItem('personalData')?? "");
}

setPerson(person: any) : void {
  localStorage.removeItem('personalData')
 localStorage.setItem('personalData',JSON.stringify(person));
}

setUserId(userId: any) : void {
  localStorage.removeItem('userId')
 localStorage.setItem('userId',userId);
}


getUserId(userId: any) : any {

 localStorage.getItem('userId');
}

getUse() : PersonalData {
  return <PersonalData> JSON.parse( localStorage.getItem('personalData')?? "");
}

removePerson(){
  localStorage.removeItem('personalData')
}


}
