
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PersonService } from '../person.service';
import { ToastrService } from 'ngx-toastr';
import { loginInfo } from '../../model/authentication';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService= inject(PersonService)
  const toasterService = inject(ToastrService)
  const router = inject(Router)

  let currentUserData: loginInfo;

    let user : any = localStorage.getItem('userData')
    currentUserData = <loginInfo>JSON.parse( user );
    console.log('currentUserData  ',  currentUserData);


  if(currentUserData == null || currentUserData == undefined ){
    toasterService.error("You are not authorized to access this page");
    localStorage.removeItem('userData');
    router.navigate(['/signin']);
    return false;
  }
  return true;
};
