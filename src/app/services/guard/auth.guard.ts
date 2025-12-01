
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PersonService } from '../person.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService= inject(PersonService)
  const toasterService = inject(ToastrService)
  const router = inject(Router)

  if(accountService.getUse() ==null || undefined){
    toasterService.error("You are not authorized to access this page")
    router.navigate(['/signin'])
  }
  return true;
};
