import { AuthenticationService } from './../authentication.service';
import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { environment } from "../../../assets/config";
import { inject } from '@angular/core';
import { take } from 'rxjs';
import { loginInfo } from '../../model/authentication';

export const httprequestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.url);
  const authService = inject(AuthenticationService);
  // let dontUseToken = false;
   let baseUrl = environment.testMode ? environment.localUrl : environment.remoteUrl;

  // req = req.clone({
  //   url: baseUrl+ req.url
  // })
  let cuser:any = localStorage.getItem('userData');

  let user:loginInfo = <loginInfo> JSON.parse(cuser);

  if (
    !/^(http|https):/i.test(req.url) &&
    !req.url.includes('assets')
  ) {

    if (
      !req.url.includes('assets') ||
      !req.url.includes(baseUrl)
    ) {
      if (user) {
        req = req.clone({
          url: baseUrl + req.url,
          setHeaders: {
            Authorization: `Bearer ${user.token}`,
            'userId': user.userId
          },
        });
      } else {
        req = req.clone({
          url: baseUrl + req.url,
        });
      }
    }
  }

//   authService.currentUser$.pipe(take(1)).subscribe({
//     next: user => {
//       console.log('httprequestInterceptor ',user);
//     if (user) {
//       console.log('httprequestInterceptor ',user);
//       req = req.clone({
//         headers: req.headers.set('userId' ,user?.userId ).set('Authorization', 'Bearer '+ user?.token)
//       })
//     }
//   }

// });


  return next(req);

};
