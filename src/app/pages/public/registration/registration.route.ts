import { Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { RegistrationComponent } from './registration.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { AddressVerificationComponent } from './address-verification/address-verification.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

export const REGISTRATION_ROUTES: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'personal-information',
      },
      {
        path: 'personal-information',
        component: PersonalInformationComponent,
      },
      {
        path: 'create-password',
        component: CreatePasswordComponent,
      },
      {
        path: 'address-verification',
        component: AddressVerificationComponent,
      },
      {
        path: 'account-type',
        loadChildren: () => import('./account-type/account-type.routes').then(m => m.ACCOUNT_TYPE_ROUTES),
      },
      {
        path: 'profile-picture',
        component: ProfilePictureComponent,
      },
    ],
  },
];
