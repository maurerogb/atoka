import { BaseResponse } from "./BaseResponse";

export interface userRequest {
  userName: string
  password: string
  userId: string
}
export interface loginRequest {
  userName:   string;
  password:   string;
  rememberMe: boolean;
}

export interface loginResponse  extends BaseResponse<any> {
  token: string;
}

export interface loginInfo{
  AccountTypeId: number,
  userId: string,
  userName: string,
  token: string
}

