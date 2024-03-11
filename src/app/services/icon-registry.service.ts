import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const Icons = {
  user:
  `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5001 1.25C11.2403 1.25 10.0321 1.75044 9.1413 2.64124C8.2505 3.53204 7.75006 4.74022 7.75006 6C7.75006 7.25978 8.2505 8.46796 9.1413 9.35876C10.0321 10.2496 11.2403 10.75 12.5001 10.75C13.7598 10.75 14.968 10.2496 15.8588 9.35876C16.7496 8.46796 17.2501 7.25978 17.2501 6C17.2501 4.74022 16.7496 3.53204 15.8588 2.64124C14.968 1.75044 13.7598 1.25 12.5001 1.25ZM9.25006 6C9.25006 5.13805 9.59247 4.3114 10.202 3.7019C10.8115 3.09241 11.6381 2.75 12.5001 2.75C13.362 2.75 14.1887 3.09241 14.7982 3.7019C15.4076 4.3114 15.7501 5.13805 15.7501 6C15.7501 6.86195 15.4076 7.6886 14.7982 8.2981C14.1887 8.90759 13.362 9.25 12.5001 9.25C11.6381 9.25 10.8115 8.90759 10.202 8.2981C9.59247 7.6886 9.25006 6.86195 9.25006 6ZM12.5001 12.25C10.1871 12.25 8.05506 12.776 6.47606 13.664C4.92006 14.54 3.75006 15.866 3.75006 17.5V17.602C3.74906 18.764 3.74806 20.222 5.02706 21.264C5.65606 21.776 6.53706 22.141 7.72706 22.381C8.91906 22.623 10.4741 22.75 12.5001 22.75C14.5261 22.75 16.0801 22.623 17.2741 22.381C18.4641 22.141 19.3441 21.776 19.9741 21.264C21.2531 20.222 21.2511 18.764 21.2501 17.602V17.5C21.2501 15.866 20.0801 14.54 18.5251 13.664C16.9451 12.776 14.8141 12.25 12.5001 12.25ZM5.25006 17.5C5.25006 16.649 5.87206 15.725 7.21106 14.972C8.52706 14.232 10.3951 13.75 12.5011 13.75C14.6051 13.75 16.4731 14.232 17.7891 14.972C19.1291 15.725 19.7501 16.649 19.7501 17.5C19.7501 18.808 19.7101 19.544 19.0261 20.1C18.6561 20.402 18.0361 20.697 16.9761 20.911C15.9191 21.125 14.4741 21.25 12.5001 21.25C10.5261 21.25 9.08006 21.125 8.02406 20.911C6.96406 20.697 6.34406 20.402 5.97406 20.101C5.29006 19.544 5.25006 18.808 5.25006 17.5Z" fill="currentColor"/>
</svg>`,
password: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 1.5C15.1959 1.49976 14.1565 1.74642 13.2149 2.22023C12.2734 2.69404 11.4559 3.38181 10.828 4.22844C10.2001 5.07506 9.77925 6.057 9.59917 7.09555C9.41909 8.13411 9.48479 9.20041 9.791 10.209L2 18V22.5H6.5L14.291 14.709C15.2194 14.9908 16.1977 15.0692 17.1591 14.9387C18.1206 14.8083 19.0426 14.4721 19.8624 13.953C20.6821 13.434 21.3804 12.7444 21.9095 11.9311C22.4386 11.1178 22.7862 10.2 22.9285 9.24025C23.0709 8.28049 23.0046 7.30132 22.7343 6.36948C22.464 5.43764 21.996 4.57502 21.3622 3.84042C20.7283 3.10582 19.9436 2.51649 19.0614 2.11261C18.1792 1.70872 17.2203 1.49978 16.25 1.5ZM16.25 13.5C15.7336 13.4997 15.2201 13.4234 14.726 13.2735L13.8658 13.0125L13.2305 13.6478L10.8448 16.0335L9.8105 15L8.75 16.0605L9.78425 17.0947L8.59475 18.2843L7.5605 17.25L6.5 18.3105L7.53425 19.3447L5.879 21H3.5V18.621L10.8515 11.2695L11.4875 10.6342L11.2265 9.774C10.9059 8.71724 10.9268 7.58631 11.286 6.54207C11.6453 5.49784 12.3247 4.59347 13.2275 3.95762C14.1304 3.32177 15.2108 2.98681 16.315 3.0004C17.4192 3.01398 18.4911 3.37542 19.378 4.03329C20.265 4.69116 20.9219 5.61197 21.2554 6.66473C21.5888 7.71749 21.5818 8.84859 21.2354 9.89714C20.8889 10.9457 20.2206 11.8583 19.3256 12.5051C18.4305 13.152 17.3543 13.5001 16.25 13.5Z" fill="currentColor"/>
<path d="M17 9C17.8284 9 18.5 8.32843 18.5 7.5C18.5 6.67157 17.8284 6 17 6C16.1716 6 15.5 6.67157 15.5 7.5C15.5 8.32843 16.1716 9 17 9Z" fill="currentColor"/>
</svg>`
}

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
    ) { }


  setIcons() {
    this.iconRegistry.addSvgIconLiteral('user', this.sanitizer.bypassSecurityTrustHtml(Icons.user));
    this.iconRegistry.addSvgIconLiteral('password', this.sanitizer.bypassSecurityTrustHtml(Icons.password));
 }
}
