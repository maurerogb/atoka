import { BaseResponse } from './../model/BaseResponse';
import { Injectable } from '@angular/core';
import { PersonalData, PersonRequest } from './../model/personaldatadto';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { ListItem } from '../model/atoka-query';



@Injectable({
  providedIn: 'root'
})

export class PersonService extends HttpService<PersonRequest> {

  constructor(private http: HttpClient) {
    super(http);
  }



  getOccupants(person: PersonRequest): Observable<BaseResponse<PersonalData>> {
    // this.baseUrl = testMode ? localUrl : remoteUrl;
    const url = 'OccupantDetails/Create-User-Profile'
    return this.http.post<BaseResponse<PersonRequest>>(url, person);
  }
  getGenerateOTP(identifer: any): Observable<BaseResponse<any>> {
    // this.baseUrl = testMode ? localUrl : remoteUrl;
    const url = `ValidateOTP/Generate-OTP-Identifer/${identifer}`
    return this.http.get<BaseResponse<PersonRequest>>(url);
  }

  getAccountTypes(): Observable<BaseResponse<ListItem[]>> {
    // this.baseUrl = testMode ? localUrl : remoteUrl;
    const url = `DocumentType/GetAccountTypes`
    return this.http.get<BaseResponse<ListItem[]>>(url);
  }

  uploadProfilePhoto(file: any): Observable<any> {
    // this.baseUrl = testMode ? localUrl : remoteUrl;
    const url = `OccupantDetails/Upload-Profile-Photo`
    return this.filePost(url, file);


  }


 getPerson() : PersonRequest {
  return <PersonRequest> JSON.parse( localStorage.getItem('personalData')?? "");
}

setPerson(person: any) : void {
  localStorage?.removeItem('personalData')
 localStorage.setItem('personalData',JSON.stringify(person));
}

// setUserId(userId: any) : void {
//   localStorage.removeItem('userId')
//  localStorage.setItem('userId',userId);
// }


// getUserId(userId: any) : any {

//  localStorage.getItem('userId');
// }

// getUse() : any {
//   return    localStorage.getItem('personalData');
// }

removePerson(){
  localStorage.removeItem('personalData')
}


}
