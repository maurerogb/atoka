<<<<<<< HEAD
=======
import { EmployeeComponent } from './../pages/protected/public-service/employee/employee.component';
>>>>>>> a80c031ac0218eb4e69d7487b722423ecad6a4a4
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
<<<<<<< HEAD
=======

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
>>>>>>> a80c031ac0218eb4e69d7487b722423ecad6a4a4
