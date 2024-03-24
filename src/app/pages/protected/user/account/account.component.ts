import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ClaimPropertyComponent } from './claim-property/claim-property.component';
import { EmploymentStatusComponent } from './employment-status/employment-status.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    MatTabsModule,
    ProfileComponent,
    EmploymentStatusComponent,
    ClaimPropertyComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

}
