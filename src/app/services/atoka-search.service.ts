import { Injectable } from '@angular/core';
import { BaseResponse } from '../model/BaseResponse';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../model/atoka-query';

@Injectable({
  providedIn: 'root'
})
export class AtokaSearchService extends HttpService<BaseResponse<any>>{

  constructor(private http: HttpClient) {
    super(http);
  }

  searchAtoka(search:any ): Observable<BaseResponse<Address>>{
    const url = `AtokaAddressDetail?atokaCode=${search}`;
    console.log(url);

    return this.get<BaseResponse<Address>>(url);

  }

}
