import { EmployeeComponent } from './../pages/protected/public-service/employee/employee.component';
export interface BusinessInfoRequest {
  businessName:         string,
  businessTypeId:       number,
  officialEmail:        string,
  officialPhone:        string,
  isBusinessRegistered: boolean,
  regNumber:            number,
  cacDocFile?:           File,
  roleInBusinessId:     number,
  businessLogFile?:      File,
  atokaCode:            string,
  acceptTM:             boolean,
}

export interface Employee {
  occupantDetailId: number;
  surname: string;
  firstName: string;
  middleName: string;
  title: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  ocupation: string;
  imageUrl: string;
  emailAddress?: any;
  placeOfWorkId: number;
  contactPerson: string;
  businessPhoneNo: string;
  employmentStartDate: string;
  businessId: number;
  branchId: number;
  isCurrentJob: boolean;
  confirmationStatus: string;
  approvedOn: string;
  approvedBy: string;
}


export enum ApprovalStatus {
  APROVED='APROVED',
  REJECTED='REJECTED',
  PENDING = 'PENDING',
}
