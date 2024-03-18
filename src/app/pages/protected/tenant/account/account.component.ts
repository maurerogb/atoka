import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile/profile.component';
import { EmploymentStatusComponent } from './employment-status/employment-status.component';
import { ClaimPropertyComponent } from './claim-property/claim-property.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    MatTabsModule,
    ProfileComponent,
    EmploymentStatusComponent,
    ClaimPropertyComponent,
    NotificationComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

}
