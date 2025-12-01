import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from "../../../assets/config";

export const httprequestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.url);
  let baseUrl = environment.testMode ? environment.localUrl : environment.remoteUrl;

const request = req.clone({
  url: baseUrl+ req.url
})

console.log(req.url);


  return next(request);
};
